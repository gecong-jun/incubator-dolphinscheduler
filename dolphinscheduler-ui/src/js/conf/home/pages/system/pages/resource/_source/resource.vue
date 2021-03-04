<template>
  <div>
    <div class="main-bottom">
      <div class="main-top">
        <el-form :inline="true" ref="pageInfo" :model="pageInfo" size="mini">
          <el-form-item :label="$tResource('resModule')">
            <el-select-dict code="systemModule"
                            v-model="pageInfo.appId"
                            :placeholder="placeholderSelect()">
            </el-select-dict>
          </el-form-item>
          <el-form-item :label="$tResource('resCode')">
            <el-input type="text" v-model="pageInfo.likeResCode" maxlength="32"
                      :placeholder="placeholderInput()"></el-input>
          </el-form-item>
          <el-form-item :label="$tResource('resName')">
            <el-input type="text" v-model="pageInfo.likeResName" maxlength="32"
                      :placeholder="placeholderInput()"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="query" type="primary">{{$tUi("query")}}</el-button>
            <el-button @click="resetQuery" type="primary">{{$tUi("reset")}}</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="btn-container">
        <el-button size="mini" type="primary" @click="toAdd" icon="el-icon-plus" plain>{{Ui( 'add')}}
        </el-button>
      </div>
      <div class="table-container">
        <el-table
          class="el-table-resource"
          :data="tableData"
          row-key="id"
          border
          default-expand-all
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
          <el-table-column
            prop="resName"
            :label="$tResource('resName')"
            sortable>
          </el-table-column>
          <el-table-column
            prop="resCode"
            :label="$tResource('resCode')"
            sortable>
          </el-table-column>
          <el-table-column
            prop="resType"
            :label="$tResource('type')"
            :formatter="tableTypeFormatter"
            sortable>
          </el-table-column>
          <el-table-column
            prop="appName"
            :label="$tResource('resModule')"
            sortable>
          </el-table-column>

          <el-table-column v-for="lang in langs"
                           :prop="lang" :key="lang"
                           :label="$t(`system.i18n_bi.${lang}`)"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row[lang]" @blur="commitI18n(lang, scope.row)"/>
            </template>
          </el-table-column>
          <el-table-column
            :label="$tUi('action')">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="detailsResource(scope.row)">{{$tUi('view')}}</el-button>
              <el-button type="text" size="small" @click="modifyResource(scope.row)">{{$tUi('edit')}}</el-button>
              <el-button type="text" size="small" @click="removeResource(scope.row)">{{$tUi('delete')}}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagination-container">
        <el-pagination background layout="total, prev, pager, next,jumper" :page-size="pageInfo.pageSize"
                       :total="pageInfo.total" :current-page="pageInfo.pageNum"
                       @current-change="currentChange">
        </el-pagination>
      </div>
    </div>

    <!-- 添加修改 --->
    <el-dialog v-el-drag-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" width="450px"
               @close="dialogClose" class="gwi-dialog" center :append-to-body="true"
               :close-on-click-modal="isDetail">

      <add-or-update-resource ref="formInfo" :data-info="dialogFormInfo"
                              :editable="!isDetail"></add-or-update-resource>

      <div class="dialog-footer" slot="footer" v-if="!isDetail">
        <el-button @click="dialogClose">{{Ui( "cancel")}}</el-button>
        <el-button @click="submitDialog('formInfo')" type="primary">{{Ui( "submit")}}</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import RESOURCE from "@/api/system/resource/resource";

  const resourceApi = new RESOURCE();

  import INTERNATIONAL from '@/api/system/common/international';

  const i18nApi = new INTERNATIONAL();
  import LIST_DICT from "@/api/system/common/listDict";

  const listDictApi = new LIST_DICT();

  import {RESOURCE_DEFINE, APP_ID} from '@/cfg/resource';

  import AddOrUpdateResource from "../components/addOrUpdateResource"
  import i18nMixin from '@/mixins/edit18n.js';

  export default {
    name: "ResourceManage",
    components: {AddOrUpdateResource},
    mixins: [i18nMixin],
    props: ['langs'],
    data() {
      return {
        tableData: [],
        // 列表分页
        pageInfo: {
          appId: null,
          pageNum: 1,
          pageSize: 10,
          likeResCode: null,
          likeResName: null
        },
        dialogFormInfo: {}, // 弹出框表单提交
        dialogFormVisible: false, // 是否显示和隐藏弹出框
        isDetail: false, // 是否查看详情
        // 弹出窗口的标题
        dialogTitle: '',
        isUpdate: false,
        options: [],
      }
    },

    created() {
      // this.pageInfo.userId = store.getters.userInfo.id;
      this.createTree();
      this.listDict();
    },

    methods: {
      $tResource(key, type = 'name') {
        return this.$t(`system.resource_et.${key}.${type}`);
      },
      $tResourceBi(key, type = 'name') {
        return this.$t(`system.resource_bi.${key}.${type}`);
      },
      listDict() {
        let params = {"typeCode": "resType", "appId": APP_ID}
        listDictApi.commit(params).then(res => {
          console.log('资源类型枚举', res);
          this.options = res;
        }).catch(body => {
          console.log(body)
        });
      },
      tableTypeFormatter(row, column, cellValue, index) {
        let opts = this.options;
        for (let i = 0; i < opts.length; i++) {
          if (opts[i].value == cellValue) {
            return opts[i].label;
          }
        }
        return cellValue;
      },
      removeResource(row) {
        this.$confirm(this.$t('system.resource_bi.deleteFolder.msg'), this.$tUi('tips'), {
          confirmButtonText: this.$tUi('ok'),
          cancelButtonText: this.$tUi('cancel'),
          type: 'warning'
        }).then(() => {
          resourceApi.removeResource(row.id).then(res => {
            this.$message.success(this.$tResourceBi('msg', 'operation_success'))
            this.createTree();
          }).catch(err => {
            console.log("err", err)
            this.$message.error(this.$tResourceBi('msg', 'operation_fail'))
          });
        }).catch(() => {
        });
      },

      detailsResource(res) {
        this.isDetail = true;
        this.dialogFormVisible = true;
        this.dialogTitle = this.$tResourceBi('label', 'res_detail')
        let obj = JSON.parse(JSON.stringify(res));
        this.setExt(obj)
        this.dialogFormInfo = obj;
      },

      modifyResource(res) {
        this.isDetail = false;
        this.isUpdate = true;
        this.dialogFormVisible = true;
        this.dialogTitle = this.$tResourceBi('label', 'res_modify');
        let obj = JSON.parse(JSON.stringify(res));
        this.setExt(obj)
        this.dialogFormInfo = obj;
      },
      setExt(obj) {
        obj.channelType = "" + obj.channelType;
        obj.resType = "" + obj.resType;
        if (obj.resExt) {
          try {
            let resExt = JSON.parse(obj.resExt);
            obj.systemModule = resExt.systemModule + "";
            obj.externalUrl = resExt.externalUrl;
            obj.externalIcon = resExt.externalIcon;
            obj.linkType = (resExt.linkType && resExt.linkType != 'undefined') ? resExt.linkType + '' : undefined;
          } catch (e) {
            console.log("e", e);
          }
        }
      },
      // 重置按钮
      resetQuery() {
        this.pageInfo.appId = null;
        this.pageInfo.likeResCode = null;
        this.pageInfo.likeResName = null;
      },
      query() {
        this.pageInfo.pageNum = 1;
        this.createTree();
      },
      // 翻页
      currentChange(val) {
        console.log('当前页:', val);
        this.pageInfo.pageNum = val;
        this.createTree();
      },
      // 数据表序号
      tableIndex(index) {
        let page = this.pageInfo.pageNum;
        let limit = this.pageInfo.pageSize;
        return (page - 1) * limit + index + 1;
      },

      // 关闭弹出框
      dialogClose() {
        this.dialogFormInfo = {};
        this.dialogFormVisible = false;
        if (this.$refs.formInfo) {
          this.$refs.formInfo.clearValidate();
        }
      },
      //
      createTree() {
        let params = this.pageInfo;
        resourceApi.searchResource(params, this.langs).then(data => {
          this.tableData = data.list;
          this.pageInfo.total = data.total;
        }).catch(err => {
          this.$message.error(JSON.stringify(err))
        });
      },
      // 添加菜单
      toAdd() {
        this.isDetail = false;
        this.isUpdate = false;
        this.dialogFormVisible = true;
        this.dialogTitle = this.$tResourceBi('label', 'res_add');
        this.dialogFormInfo = {};
      },
      // 弹出框提交
      submitDialog(formName) {
        this.$refs.formInfo.validate(valide => {
          if (valide) {
            // if (this.dialogFormInfo.sortNum > 127) {
            //     this.$message.error("排序号不可大于127");
            //     return;
            // }
            console.log("info....", this.dialogFormInfo)
            // if (this.dialogFormInfo.linkType == 1 || this.dialogFormInfo.linkType == 2 || this.dialogFormInfo.linkType == 3) {
            //   //由于外部链接和内部链接，需要作为二级
            //   // if (this.dialogFormInfo.externalUrl == undefined || this.dialogFormInfo.externalUrl == ''){
            //   //     this.$refs.externalUrl.focus();
            //   //     this.$message.error('资源类型为外部链接时，外部链接不能为空');
            //   //     return;
            //   // }
            // } else {
            //   this.dialogFormInfo.externalUrl = undefined;
            // }

            let resExt = {};
            resExt["externalUrl"] = this.dialogFormInfo.externalUrl;
            resExt["externalIcon"] = this.dialogFormInfo.externalIcon;
            resExt["systemModule"] = this.dialogFormInfo.systemModule + "";
            resExt["linkType"] = this.dialogFormInfo.linkType;
            this.dialogFormInfo["resExt"] = JSON.stringify(resExt);
            this.dialogFormInfo.appId = this.dialogFormInfo.systemModule;

            if (this.isUpdate) {
              resourceApi.updateResource(this.dialogFormInfo).then(res => {
                console.log("res...", res)
                this.$message.success(this.$tResourceBi('msg', 'operation_success'))

                this.dialogFormInfo = {};
                this.dialogFormVisible = false;
                this.createTree();
              }).catch(err => {
                console.log("err...", err)
                this.$message.error(this.$tResourceBi('msg', 'operation_fail'))
              });
            } else {
              resourceApi.addResource(this.dialogFormInfo).then(res => {
                console.log("res...", res)
                this.$message.success(this.$tResourceBi('msg', 'operation_success'))

                this.dialogFormInfo = {};
                this.dialogFormVisible = false;
                this.createTree();
              }).catch(err => {
                console.log("err...", err)
                this.$message.error(this.$tResourceBi('msg', 'operation_fail'))
              });
            }
          } else {
            this.$message.error(this.$tResourceBi('msg', 'invalid_params'));
            return false;
          }
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/max-inbodyTree-style.css";

  .main-top {
    padding: 0px !important;
  }

  .el-table-resource {
    /*margin: 15px;*/
  }

  .gwi-dialog {
    /deep/ .el-dialog {
      margin-top: 8vh !important;
    }

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
    margin-left: 15px;
    font-size: 18px;
    cursor: pointer;
    &.el-icon-folder-add {
      color: #409EFF
    }
    &.el-icon-document-add {
      color: #909399
    }
    &.el-icon-edit {
      color: #67C23A
    }
    &.el-icon-close {
      color: #F56C6C
    }
  }

</style>
