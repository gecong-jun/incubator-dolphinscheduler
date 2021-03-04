<template>
    <el-form :inline="false" :model="dataInfo" ref="formInfo" :rules="dialogRules"
             :status-icon="true" :inline-message="true" label-position="right" label-width="160px"
             size="mini" class="dialog-form">
        <el-form-item :label="$tResource('resCode')" prop="resCode">
            <el-input type="text" v-model="dataInfo.resCode" name="resCode" maxlength="30" minlength="1" clearable
                      :disabled="!editable" :placeholder="placeholderInput()"></el-input>
        </el-form-item>
        <el-form-item :label="$tResource('resName')" prop="resName">
            <el-input type="text" v-model="dataInfo.resName" name="resName" maxlength="30" minlength="1" clearable
                      :disabled="!editable" :placeholder="placeholderInput()"></el-input>
        </el-form-item>
        <!--<el-form-item label="父级资源">-->
            <!--<el-input type="text" v-model="dataInfo.parentName" disabled></el-input>-->
        <!--</el-form-item>-->

        <el-form-item :label="$tResource('resChannel')" prop="channelType">
            <el-select-dict code="channelType" @change="channelChange"
                            v-model="dataInfo.channelType" :disabled="!editable"
                            :placeholder="placeholderSelect()">
            </el-select-dict>
        </el-form-item>
        <el-form-item :label="$tResource('resModule')" prop="systemModule">
            <el-select-dict code="systemModule"
                            v-model="dataInfo.systemModule" :disabled="!editable"
                            :placeholder="placeholderSelect()">
            </el-select-dict>
        </el-form-item>

        <el-form-item :label="$tResource('resType')" prop="resType">
            <el-select-dict code="resType" v-model="dataInfo.resType" :disabled="!editable"
                       :placeholder="placeholderSelect()">
            </el-select-dict>
        </el-form-item>

        <!-- <el-form-item :label="$tResource('linkType')" v-if="dataInfo.resType == 1">
            <el-select-dict code="linkTypePC" v-model="dataInfo.linkType" :disabled="!editable" clearable
                       :placeholder="placeholderSelect()">
            </el-select-dict>
        </el-form-item> -->
        <!--<el-form-item :label="$tResource('linkType')" v-if="dataInfo.resType == 2">-->
            <!--<el-select-dict code="linkTypeSmall" v-model="dataInfo.linkType" :disabled="!editable" clearable-->
                            <!--:placeholder="placeholderSelect()">-->
            <!--</el-select-dict>-->
        <!--</el-form-item>-->

        <el-form-item :label="$tResource('linkUrl')" prop="externalUrl">
            <el-input type="text" v-model="dataInfo.externalUrl" name="externalUrl"
                      minlength="1" :disabled="!editable"
                      :placeholder="placeholderInput()"></el-input>
        </el-form-item>
        <el-form-item :label="$tResource('iconUrl')" prop="externalIcon">
            <el-input type="text" v-model="dataInfo.externalIcon" name="externalIcon"
                      maxlength="100" minlength="1" :disabled="!editable" clearable
                      :placeholder="placeholderInput()"></el-input>
        </el-form-item>
        <!-- <el-form-item :label="$tResource('sortNum')" prop="sortNum">
            <el-input type="number" v-model="dataInfo.sortNum" name="sortNum"
                      :disabled="!editable"
                      :placeholder="placeholderInput()"></el-input>
        </el-form-item> -->
        <el-form-item :label="$tResource('remark')">
            <el-input type="textarea" size="small" v-model="dataInfo.resRemark" maxlength="60" clearable
                      :disabled="!editable" :placeholder="placeholderInput()"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    // import {regular} from "@/modules/backend";

    export default {
        name: 'add-or-update-resource',

        props: {
            dataInfo: {
                type: Object,
                default: {}
            },

            editable: {
                type: Boolean,
                default: true,
            },

        },

        methods: {
            $tResource (key, type = 'name') {
                return this.$t(`system.resource_et.${key}.${type}`);
            },
            validate(result) {
                this.$refs['formInfo'].validate(valide => {
                    result(valide);
                })
            },
            clearValidate() {
                this.$refs['formInfo'].clearValidate();
            },
            channelChange() {
                //this.dataInfo.linkType = '';
            },
        },

        data() {
            return {
                dialogRules: {
                    resCode: [
                        {required: true, message: this.placeholderInput(), trigger: 'blur'},
                        // {pattern: regular.enNumberLine, message: this.$t('ui.validate.enNumberLineMsg'), trigger: 'blur'}
                    ],
                    resName: [
                        {required: true, message: this.placeholderInput(), trigger: 'blur'},
                        // {pattern: regular.cnEnNumInput, message: this.$t('ui.validate.cnEnNumInputMsg'), trigger: 'blur'}
                    ],
                    // sortNum: [
                    //     {required: true, message: this.placeholderInput(), trigger: 'blur'},
                    //     {pattern: /^(\d{1,2})?$/g, message: this.$t('ui.validate.range', {min: 0, max: 99}), trigger: 'blur'}
                    // ],
                    resType: [
                        {required: true, message: this.placeholderSelect(), trigger: 'blur'}
                    ],
                    systemModule: [
                        {required: true, message: this.placeholderSelect(), trigger: 'blur'}
                    ],
                    channelType: [
                        {required: true, message: this.placeholderSelect(), trigger: 'blur'}
                    ],
                }
            }
        },
    };
</script>
<style scoped lang="scss">

    .dialog-form {
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


</style>
