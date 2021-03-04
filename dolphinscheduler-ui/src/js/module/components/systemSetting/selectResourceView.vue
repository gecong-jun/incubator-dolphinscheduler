<template>
    <component :is="componentName"
        v-model="valueData"
        :options="options"
        style="width:300px"
        :props="{ expandTrigger: 'hover', emitPath:false, multiple :true  }"
        filterable
        :placeholder="placeholderSelect()"
        @change="handleChange">
        <template slot-scope="{ node, data }">
            <span>{{ data.label }}</span>
            <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
            <i v-else style="color:rgb(73,156,214)" :class="leafClass(data)"/>
        </template>
    </component>
</template>

<script>
    import SELECT_MENU_RESOURCE from '../../api/system/resource/selectResourceMenu';
    const selectMenuResource = new SELECT_MENU_RESOURCE();
    import {VIEW, BUTTON, API_AUTH} from '@/cfg/resource';

    export default {
        name:'selectResourceMenu',
        props:['value', 'panel', 'resTypes', 'userId', 'channelType'],

        data () {
            return {
                options:[],
                valueData:this.value
            };
        },

        watch:{
            value (val) {
                this.valueData = val;
            }
        },

        async created () {
            this.options = await selectMenuResource.generateResourceData({
                resTypes:this.resTypes,
                userId:this.userId,
                channelType:this.channelType
            });
        },
        
        computed:{
            componentName () {
                return this.panel ? 'el-cascader-panel':'el-cascader'
            }
        },
        
        methods:{
            clear() {
                this.valueData = null
            },
            handleChange (val) {
                this.$emit('input', val);
            },
            leafClass (data) {
                if (data.resType === VIEW) {
                    return 'el-icon-menu';
                } else if (data.resType === BUTTON) {
                    return 'el-icon-edit-outline';
                } else if (data.resType === API_AUTH) {
                    return 'el-icon-platform-eleme';
                } else {   
                    return '';
                }
            }
        }
    }
</script>
