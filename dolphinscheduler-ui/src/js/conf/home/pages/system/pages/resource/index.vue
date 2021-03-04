<template>
  <div class="gwi-module-container">
    <div class="bottom-container">
      <div class="template">
        <select-template></select-template>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 100%;margin-left: 15px;">
        <el-tab-pane :label="$t(`system.resource_bi.functions.${RESOURCE_ACTIONS.RESOURCE_MANAGE}`)"
                     :name="RESOURCE_ACTIONS.RESOURCE_MANAGE">
          <resource-manage :langs="langs" ref="resource"></resource-manage>
        </el-tab-pane>

        <el-tab-pane :label="$t(`system.resource_bi.functions.${RESOURCE_ACTIONS.MENU_MANAGE}`)"
                     :name="RESOURCE_ACTIONS.MENU_MANAGE">
          <menu-manage ref="menu_mgr" :langs="langs"></menu-manage>
        </el-tab-pane>
        <el-tab-pane :label="$t(`system.resource_bi.functions.${RESOURCE_ACTIONS.FOLDER_MANAGE}`)"
                     :name="RESOURCE_ACTIONS.FOLDER_MANAGE">
          <folder-manage ref="folder_mgr"></folder-manage>
        </el-tab-pane>
        <!-- <el-tab-pane v-if="I18N.hasI18n()" :label="$t(`resource_bi.functions.${RESOURCE_ACTIONS.INTERNATIONA}`)" :name="RESOURCE_ACTIONS.INTERNATIONA">
            <i18n-view :langs=I18N.getLangList()></i18n-view>
        </el-tab-pane> -->
      </el-tabs>
    </div>

  </div>
</template>

<script>
  import {RESOURCE_ACTIONS} from '@/cfg/resource.js';
  import menuManage from './_source/menu.vue';
  import resourceManage from './_source/resource.vue';
  import folderManage from './_source/folder.vue';
  import i18nView from './_source/international.vue';
  import SelectTemplate from '../../../../../../module/components/systemSetting/selectTemplate';
  // import I18N from '@/api/system/common/i18n.js';

  export default {
    name: 'resource-system',
    components: {menuManage, resourceManage, folderManage, i18nView, SelectTemplate},
    data() {
      return {
        activeName: RESOURCE_ACTIONS.RESOURCE_MANAGE,
        RESOURCE_ACTIONS,
      };
    },
    watch: {
      TemplateId(newVal, oldVal) {
        console.log("change", newVal, oldVal)
        this.refresh();
      }
    },
    computed: {
      langs () {
        return []; //I18N.getLangList();
      },
      TemplateId() {
        return this.store.getters.curTempId;
      }
    },
    methods: {
      handleClick(e) {
        let index = e.index;
        if (index == 1) {
          this.$refs.menu_mgr.click();
        } else if (index == 2) {
          this.$refs.folder_mgr.click();
        }
      },
      refresh() {
        let activeName = this.activeName;
        if (activeName === RESOURCE_ACTIONS.RESOURCE_MANAGE) {
          // this.$refs.resource.createTree();
        } else if (activeName === RESOURCE_ACTIONS.MENU_MANAGE) {
          this.$refs.menu_mgr.click();
        } else if (activeName === RESOURCE_ACTIONS.FOLDER_MANAGE) {
          this.$refs.folder_mgr.click();
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs {
    width: 100%;
    height: 100%;
    margin-left: 15px;
  }

  .template {
    height: 40px;
    position: absolute;
    top: 45px;
    right: 30px;
    z-index: 99;
  }
</style>
