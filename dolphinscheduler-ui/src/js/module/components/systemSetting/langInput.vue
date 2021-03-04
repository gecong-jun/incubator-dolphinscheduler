<template>
    <div v-if="langs">
        <div>{{label}}</div>
        <el-form-item v-for="lang in langModel" :label="$t(`system.lang.${lang.name}`)" :key="lang.name">
            <el-input v-model="lang.value"></el-input>
        </el-form-item>
    </div>

    <el-form-item v-else :label="label" :prop="prop">
        <el-input v-model="modelField"></el-input>
    </el-form-item>
</template>

<script>
import getConfig from  '../../cfg/getConfig';

export default {
    name:'lang-input',
    props:{
        modelField:{
            default:null
        },
        label:{},
        prop:{}
    },

    data () {
        return {
            langs:null,
            modelFieldData:this.modelField,
            langModel:[]
        };
    },

    created () {
            let config = getConfig.getConfig();
            let langModels = [];
            
            if (config.langList) {
                this.langs = config.langList;
                config.langList.forEach((lang) => {
                    langModels.push({
                        name:lang, 
                        value:null
                    });
                });
            }

            this.langModel = langModels;
    },

    watch:{
        modelFieldData (val) {
            this.$emit('update:modelField', val);
        }
    },

    methods:{
        getValue () {
            if (this.langs) {
                return this.langModel;
            } else {
                return this.modelFieldData;
            }
        }
    }
}
</script>