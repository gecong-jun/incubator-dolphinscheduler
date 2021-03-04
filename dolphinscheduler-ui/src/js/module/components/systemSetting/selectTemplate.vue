<template>
  <el-select
    v-bind="[$attrs,$props]"
    v-on="$listeners"
    v-model="selectValue"
    @change="tempChange">
    <el-option
      v-for="item in options"
      :key="item.key"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>

  import il8n from '../../lang'
  import $store from '../../../conf/home/store'
  import {TEMPLATE_ID} from  '../../cfg/resource';

  export default {
    name: 'SelectTemplate',
    data() {
      return {
        options: [
          {key: "1", label: il8n.t('system.resource_et.pc.name'), value: TEMPLATE_ID},
          {key: "2", label: il8n.t('system.resource_et.smallApp.name'), value: "small-app"}
        ],
        selectValue: $store.getters.curTempId,
      }
    },
    props: {
      value: [String, Number],
    },
    watch: {
      value(val) {
        this.initValue(val)
      }
    },
    mounted() {
      this.initValue(this.value);
    },

    methods: {
      initValue(val) {
        if (!val) return
        if (typeof val === 'number') {
          this.selectValue = val.toString()
        } else {
          this.selectValue = val
        }
      },
      tempChange(val) {
        $store.commit("setTempId", val)
      }
    }
  }
</script>
