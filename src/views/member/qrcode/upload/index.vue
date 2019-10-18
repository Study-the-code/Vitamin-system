<template>
  <div class="page-container">
    <div class="card-group">
      <h3>批量上传商品</h3>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" inline>
        <FormItem label="员工类型" prop="grop">
          <Select v-model="formValidate.city">
            <Option value="shanghai">专营员工</Option>
            <Option value="shenzhen">自营员工</Option>
          </Select>
        </FormItem>
           <FormItem label="选择文件" prop="files">
            <Input v-model="formValidate.name" placeholder="还未选择任何文件"></Input>
              <Upload action="">
            <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
        </FormItem>
        </FormItem>
           <FormItem label="备注" >
            <Input v-model="formValidate.name" placeholder="请填写备注"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            
        </FormItem>
      </Form>
    </div>
    <div class="card_bottom">
        <h3>处理日志</h3>
           <Table :columns="columns1" :data="upList"></Table>
    </div>
  </div>
</template>
<script>
import { mapState,mapActions } from "vuex";
import http from '@/api/index'
export default {
  name: "upload",
  data() {
    return {
        upList:[],
         formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                  ruleValidate: {
                    grop: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    files: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ]
                    
                },
                columns1:[
                    {
                        title:"上传日期",
                        key:"created_at"
                    },{
                        title:'操作人',
                        key:'operate_name'
                    },{
                        title:'上传备注',
                        key:'mark'
                    },{
                        title:'上传文件',
                        key:'filename'
                    },{
                        title:'上传状态',
                        render:(e,params)=>{
                           return e('span',[
                                e('span',{
                                    type:'1'
                                },"上传成功")
                            ])
                        }
                    },{
                        title:"处理结果",
                        render:(e,params)=>{
                           return e("div", [
              e(
                "p",
                {
                  
                  on: {},
                 
                },
                params.row.success+
                "成功"
              ),
              e(
                "p",
                {
                  style: {
                    color: "red",
                    padding:'5px'
                  },
                  on: {},
                
                },
                params.row.failed+
                "失败"
              )
            ]);
                        }
                    },{
                        title:"操作",
                        render:(e,params)=>{
                            return e('span',[
                                e('span',{
                                    on:{},
                                    style:{
                                        color:'blue'
                                    },

                                },"下载结果文件")
                            ])
                        }
                    }
                ]
            }
        },
        methods:{
        handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            async _getUpload(){
                const params={
                page: 1,
                page_size: 10 
            }
             const result= await  http.Upload(params)
             console.log(result)
             this.upList=result.data.list
            return result
            }
            
        },
        
        mounted(){
            this._getUpload()
        }
    };
  
</script>
<style lang="scss">
.page-container {
  width: 100%;
  padding: 24px 0;
  overflow: hidden;
  border-bottom: 1px solid #e8e8e8;
  .card-group{
      h3{
              font-weight: 500;
      }
      .ivu-form-item{

    width: 40%;
    
      }
  }
  .card_bottom{
          padding: 24px;
    background: #fff;
    overflow: hidden;
        margin-top: 24px;
  }
        
}
</style>