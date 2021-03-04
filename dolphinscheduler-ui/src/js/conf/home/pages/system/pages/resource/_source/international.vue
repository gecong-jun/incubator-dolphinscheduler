<template>
     <div class="main-bottom">
            <div class="btn-container">
                <el-button size="mini" type="primary" @click="addRootMenu" icon="el-icon-plus" plain>{{$t('resource_bi.addRootMenu.title')}}
                </el-button>
            </div>
            <div class="table-container">
                <el-table
                    class="el-table-resource"
                    :data="treeData"
                    style="width: 100%;margin-bottom: 20px;"
                    row-key="id"
                    border
                    default-expand-all
                    :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
                >

                <el-table-column
                    prop="resName"
                    :label="$t('resource_et.resName.name')"
                    sortable
                    width="280">
                </el-table-column>
                <el-table-column
                    prop="resCode"
                    :label="$t('resource_et.resCode.name')"
                    sortable
                    width="180">
                </el-table-column>
                
                <el-table-column v-for="lang in langs"
                    :prop="lang" :key="lang"
                    :label="$t(`system.i18n_bi.${lang}`)"
                    >
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.show"/>
                    </template>    
                </el-table-column>

                <el-table-column
                    prop="type"
                    label="操作">
                    <template slot-scope="scope">
                         <i class="action el-icon-folder-add" v-if="scope.row.show" @click="addResourceFolder(scope.row.id)"></i>
                         <i class="action el-icon-document-add" v-if="scope.row.show" @click="toAddResource(scope.row.id)"></i>
                         <i class="action el-icon-edit" @click="updateResourceFolderName(scope.row)"></i>
                         <i class="action el-icon-close" @click="removeResourceFolder(scope.row.id)"></i> 
                    </template>
                </el-table-column>
            </el-table>
            </div>

            <!-- 修改/编辑文件夹 --->
            <el-dialog v-el-drag-dialog :title="dialogTitle" :visible.sync="dialogFormFolderVisible" width="450px"
                   @close="dialogClose" class="gwi-dialog" center :append-to-body="true"
                   :close-on-click-modal="isDetail">
                <lang-input ></lang-input>
                <div class="dialog-footer" slot="footer">
                    <el-button @click="dialogFormFolderVisible = false">{{$t('取消')}}</el-button>
                    <el-button @click="submitDialog('formInfo')" type="primary" v-if="!isDetail">
                        {{$t('提交')}}
                    </el-button>
                </div>
            </el-dialog>

            <!-- 添加修改 --->
            <el-dialog v-el-drag-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" width="450px"
                   @close="dialogClose" class="gwi-dialog" center :append-to-body="true"
                   :close-on-click-modal="isDetail">

                <add-or-update-resource ref="formInfo" :data-info="dialogFormInfo"
                                        :editable="!isDetail"></add-or-update-resource>

                <div class="dialog-footer" slot="footer">
                    <el-button @click="dialogClose">{{$t('取消')}}</el-button>
                    <el-button @click="submitDialog('formInfo')" type="primary" v-if="!isDetail">
                        {{$t('提交')}}
                    </el-button>
                </div>
            </el-dialog>
        </div>
</template>

<script>
    import store from '@/store';

    // API 引用
    import RESOURCE_TREE from "@/api/system/resource/listResourceTree";
    const resourceTree = new RESOURCE_TREE();

    import RESOURCE_FOLDER from '@/api/system/resource/resourceFolder';
    const resourceFolder = new RESOURCE_FOLDER();

    // 相关配置
    import {RESOURCE_DEFINE} from '@/cfg/resource';

    // 子组件引用
    import AddOrUpdateResource from "../components/addOrUpdateResource";
    import LangInput from "../components/langInput";

    const findTreeNode = (treeData, nodeKey, childrenKey='children') => {
        let treeNode = treeData.find((node, index) => {
            return node.id === nodeKey;
        });

        if (treeNode) {
            return treeNode;
        } else {
            for (let i = 0; i < treeData.length; i++) {
                if (treeData[i][childrenKey]) {
                     let treeNode2 = findTreeNode(treeData[i][childrenKey], nodeKey, childrenKey);
                     if (treeNode2) {
                         return treeNode2;
                     }         
                }
            }
        }
    }

    export default {
        name: "resourceI18n",
        components:{AddOrUpdateResource, LangInput},
        props:{
            langs:{
                default () {
                    return [];
                }
            }
        },
        data () {
            return {
                emptyText:"暂无数据",// 列表loading效果
                // 列表的数据
                tableData: [],
                treeData: [], // 树形的数据
                expandedKeys: [],
                treeProps: {
                    label: "resName",
                    children: "children",
                },
                dialogUpdateFlag: true, //true 编辑  false: 添加
                // 当前选择的树的节点
                selectedTree: null,
                // 列表分页
                pageInfo: {
                    parentId: null,
                    pageNum: 1,
                    start: 0,
                    pageSize: 10,
                    total: 0,
                    resCode:null,
                    resName:null,
                },
                dialogFormInfo: {}, // 弹出框表单提交
                dialogFormVisible: false, // 是否显示和隐藏弹出框
                dialogFormFolderVisible:false,
                dialogTitle:'',
                isDetail: false, // 是否查看详情  
                isClickTree: false // 是否点击树查询
            };
        },

        created() {
            this.createTree();
            console.log('langs', this.langs);
        },

        methods: {
            tableTypeFormatter (row, column, cellValue, index) {
                let resourceType = RESOURCE_DEFINE.get(cellValue);
                if (resourceType) {
                    return this.$t(`resource_et.typeDefine.${resourceType.key}.name`);
                } else {
                    return '';
                }
            },

            addRootMenu () {
                this.addResourceFolder(-1);
            },

            addResourceFolder (parentId) {
                this.$prompt(this.$t('resource_bi.addInput.title'), this.$t('ui.common.tips'), {
                    confirmButtonText: this.$t('ui.common.ok'),
                    cancelButtonText: this.$t('ui.common.cancel'),
                    // inputPattern: /{3,17}?/,
                    inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                    resourceFolder.addFolder({parentId, resName:value}).then(() => {
                        if (parentId !== -1) {
                            this.createTree().then(() => {
                                let treeNode = findTreeNode(this.treeData, parentId);
                                treeNode.children = [].concat(treeNode.children);
                            });
                        } else {
                            this.createTree();    
                        }
                    });
                }).catch((e) => {       
                });
            },

            removeResourceFolder (id, parentId) {
                this.$confirm(this.$t('resource_bi.deleteFolder.msg'), this.$t('ui.common.tips'), {
                    confirmButtonText: this.$t('ui.common.ok'),
                    cancelButtonText: this.$t('ui.common.cancel'),
                    type: 'warning'
                }).then(() => {
                    resourceFolder.removeFolder({id}).then(() => {
                        this.createTree().then(() => {
                            let treeNode = findTreeNode(this.treeData, parentId);
                            if (treeNode) {
                                treeNode.children = [].concat(treeNode.children);        
                            }
                            this.$message({
                                type: 'success',
                                message: this.$t('resource_bi.deleteFolder.success')
                            });
                        });
                    });
                }).catch(() => {
                });   
            },
            updateResourceFolderName (folderData) {
                this.$prompt(this.$t('resource_bi.addInput.title'), this.$t('ui.common.tips'), {
                    confirmButtonText: this.$t('ui.common.ok'),
                    cancelButtonText: this.$t('ui.common.cancel'),
                    // inputPattern: /{3,17}?/,
                    inputValue:folderData.resName,
                    inputErrorMessage: '邮箱格式不正确'
                 }).then(({ value }) => {
                    resourceFolder.changeFolderName(value, folderData).then(() => {
                        this.createTree().then(() => {
                            folderData = Object.assign({}, folderData, {resName:value});
                        });
                        folderData = Object.assign({}, folderData, {resName:value});
                    });
                }).catch((e) => {       
                });
            },

            toAddResource () {
                this.dialogFormVisible = true;
            },
            // 重置按钮
            resetQuery () {
                this.pageInfo.likeResCode = undefined;
                this.pageInfo.resName = undefined;
            },
            // 重置按钮
            reset(formName) {
                this.$refs[formName].resetFields();
                // this.searchInfo.roleName = null;
                // this.searchInfo.isEnable = null;
            },
            query() {
                this.isClickTree = true;
                this.pageInfo.pageNum = 1;
                this.searchSonTree();
            },
            // 翻页
            currentChange(val) {
                console.log('当前页:', val);
                this.pageInfo.pageNum = val;
                this.searchSonTree();
            },
            // 数据表序号
            tableIndex(index) {
                let page = this.pageInfo.pageNum;
                let limit = this.pageInfo.pageSize;
                return (page - 1) * limit + index + 1;
            },
            // 资源类型转换
            resTypeTransfer(row, column, cellValue, index) {
                if (cellValue === 1) {
                    return "菜单";
                }
                if (cellValue === 2) {
                    return "按钮";
                }
                if (cellValue === 3) {
                    return "接口";
                }
                if (cellValue === 4) {
                    return "小程序菜单";
                }
                if (cellValue === 5) {
                    return "小程序按钮";
                }
                if (cellValue === 6) {
                    return "pc端外部链接";
                }
                if (cellValue === 7) {
                    return "小程序外部链接";
                }
                if (cellValue === 8) {
                    return "pc端内部链接";
                }
            },
            systemTransfer(row, column, cellValue, index) {
                if(cellValue!=""){
                    return JSON.parse(cellValue).system;
                }
                return cellValue;
            },
            // 关闭弹出框
            dialogClose() {
                this.dialogFormInfo = {};
                this.dialogFormVisible = false;
            },
            // 生成树
            async createTree() {
                this.treeData = await resourceTree.commit();
                // this.requestVO({"resTypes": [1, 2, 3, 4, 5,6,7,8]}, systemSetting.listResource).then(data => {
                //     let treeDataTmp = [];
                //     let rootMenu = {}; // 最上层的根元素
                //     let context = data.context;
                //     for (let i = 0; i < context.length; i++) {
                //         if (context[i].resCode === "root") {
                //             rootMenu = context[i];
                //             context[i]["children"] = [];
                //             treeDataTmp.push(context[i]);
                //             context.splice(i, 1);
                //             break;
                //         }
                //     }
                //     console.log("菜单的顶级目录:", treeDataTmp);
                //     findAllChildren(treeDataTmp[0], context, "parentId", "id");
                //     console.log("整理后的树状结构菜单是:", treeDataTmp);
                //     this.treeData = treeDataTmp;
                //     this.expandedKeys = queryGradeNode(treeDataTmp, "id");
                // }).catch(body => {
                //     this.$message.error(body.stateMsg);
                // })
            },
            // 添加菜单
            // 弹出框提交
            submitDialog(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (this.dialogFormInfo.sortNum > 127){
                            this.$refs.sortNum.focus();
                            this.$message.error("排序号不可大于127");
                            return;
                        }
                        if (this.dialogFormInfo.linkType == 1 || this.dialogFormInfo.linkType == 2 || this.dialogFormInfo.linkType == 3){
                            //由于外部链接和内部链接，需要作为二级
                            // if (this.dialogFormInfo.externalUrl == undefined || this.dialogFormInfo.externalUrl == ''){
                            //     this.$refs.externalUrl.focus();
                            //     this.$message.error('资源类型为外部链接时，外部链接不能为空');
                            //     return;
                            // }
                        }else{
                            this.dialogFormInfo.externalUrl = undefined;
                        }
                        this.showLoading();

                        let resExt = {};
                        //resExt["system"] = this.dialogFormInfo.system;
                        //resExt["smallIcon"] = this.dialogFormInfo.smallIcon;
                        //resExt["smallUrl"] = this.dialogFormInfo.smallUrl;
                        resExt["externalUrl"] = this.dialogFormInfo.externalUrl;
                        resExt["externalIcon"] = this.dialogFormInfo.externalIcon;
                        resExt["systemModule"] = this.dialogFormInfo.systemModule;
                        resExt["linkType"] = this.dialogFormInfo.linkType;
                        this.dialogFormInfo["resExt"] = JSON.stringify(resExt);
                        if (this.dialogUpdateFlag) {
                            this.dialogFormInfo["lastModifier"] = this.store.getters.userInfo.id;
                            this.requestVO(this.dialogFormInfo, systemSetting.updateResource).then(body => {
                                this.$notify({title: '成功', message: '编辑成功', type: 'success'});
                                this.dialogFormInfo = {};
                                this.dialogFormVisible = false;
                                this.createTree();
                                this.pageInfo.page = 1;
                                this.searchSonTree();
                                this.hideLoading();
                            }).catch(body => {
                                this.hideLoading();
                                this.$message.error(body.stateMsg);
                            })
                        } else {
                            this.dialogFormInfo["creater"] = this.store.getters.userInfo.id;
                            this.requestVO(this.dialogFormInfo, systemSetting.addResource).then(body => {
                                this.$notify({title: '成功', message: '添加成功', type: 'success'});
                                this.dialogFormInfo = {};
                                this.dialogFormVisible = false;
                                this.createTree();
                                this.pageInfo.page = 1;
                                this.searchSonTree();
                                this.hideLoading();
                            }).catch(body => {
                                this.hideLoading();
                                this.$message.error(body.stateMsg);
                            })
                        }
                    } else {
                        this.$message.error("提交不合法");
                        return false;
                    }
                });
            },
            // 点击树
            treeClick(resInfo) {
                console.log("点击的节点是:", resInfo);
                if (resInfo.resExt instanceof String) {
                    resInfo.resExt = JSON.parse(resInfo.resExt);
                }
                this.selectedTree = resInfo;
                this.pageInfo.pageNum = 1;
                this.isClickTree = true;
                this.searchSonTree();
            },
            // 点击树时,搜索子节点
            searchSonTree() {
                if (this.selectedTree == undefined){
                    this.$message.error("请先在左边菜单选择一项资源");
                    return;
                }
                if (this.isClickTree) {
                    this.pageInfo.parentId = this.selectedTree.id;
                    this.pageInfo.downResId = undefined;
                }else{
                    this.pageInfo.downResId = this.selectedTree.id;
                    this.pageInfo.parentId = undefined;
                }
                this.emptyText = "正在加载数据...";// 列表loading效果
                this.requestVO(this.pageInfo, systemSetting.searchResource).then(data => {
                    this.tableData = data.context.list;
                    console.log(this.tableData);
                    if (this.tableData == undefined || this.tableData.length < 1){
                        this.emptyText = "暂无数据"
                    }else{
                        this.tableData.forEach(item=>{
                            if (item.resExt != undefined && item.resExt != '') {
                                let resExt = JSON.parse(item.resExt);
                                item.systemModule = resExt.systemModule;
                            }
                        })

                    }
                    this.pageInfo.total = data.context.total;
                }).catch(body => {
                    this.emptyText = "暂无数据"
                    this.$message.error(body.stateMsg);
                });
            },
            // 编辑菜单
            toModify (id) {
                this.dialogTitle = "编辑资源";
                this.isDetail = false;
                this.getData(id)
            },
            toDetail (row) {
                this.dialogTitle = '查看详情';
                this.isDetail = true;
                this.getData(row.id)
            },
            rowDblclick (v) {
                this.toDetail(v);
            },
            getData (id) {
                this.dialogUpdateFlag = true;
                this.dialogFormVisible = true;
                this.requestGet(id, systemSetting.getResource).then(data => {
                    let context = data.context;
                    context["parentName"] = this.selectedTree.resName;
                    if (context.resExt != undefined && context.resExt != ''){
                         let resExt = JSON.parse(context.resExt);
                         //context["system"] = resExt.system;
                         //context["smallIcon"] = resExt.smallIcon;
                         //context["smallUrl"] = resExt.smallUrl;
                         context["externalUrl"] = resExt.externalUrl;
                         context["externalIcon"] = resExt.externalIcon;
                         context["systemModule"] = resExt.systemModule;
                         context["linkType"] = resExt.linkType;
                     }
                    this.dialogFormInfo = context;
                }).catch(body => {
                    this.$message.error(body.stateMsg);
                });
            },

            del (row, index) {
                console.log("要删除:", row);
                this.$confirm('确认删除 ' + row.resName, '删除元素', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.requestDelete(row.id, systemSetting.delResource).then(body => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });

                        this.createTree();
                        if (this.pageInfo.pageNum !== 1) {
                            // 删除的是某页的第一条数据
                            let tmp = (index + 1) % this.pageInfo.pageSize;
                            if (tmp === 1) {
                                this.pageInfo.pageNum --;
                            }
                        }
                        this.searchSonTree();
                    }).catch(body => {
                        this.$message.error(body.stateMsg);
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/css/max-inbodyTree-style.css";
    .gwi-dialog {
        .el-dialog__title {
            color: #fff;
        }

        .el-input--mini {
            width: 80%;
        }

        .el-select--mini {
            width: 80%;
        }

        .el-textarea {
            width: 80%;
        }
    }
    i.action {
        margin-left:15px;
        font-size:18px;
        cursor:pointer;
        &.el-icon-folder-add {
            color:#409EFF
        }
        &.el-icon-document-add {
            color:#909399
        }
        &.el-icon-edit {
            color:#67C23A
        }
        &.el-icon-close {
            color:#F56C6C
        }
    }

</style>
