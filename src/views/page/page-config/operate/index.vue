<template>
  <div class="content-action">
    <div class="page-container">
      <div class="page-template bg-white">
        <h3>模块</h3>
        <div class="template-container">
          <div class="type-title">文字</div>
          <div class="template-item-logo">
            <div class="demo-upload-list" v-for="(item,index) in uploadList" :key="index">
              <template v-if="item.status === 'finished'">
                <img :src="item.url" />
                <div class="demo-upload-list-cover">
                  <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                  <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                </div>
              </template>
              <template v-else>
                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
              </template>
            </div>
            <Upload
              ref="upload"
              :show-upload-list="false"
              :default-file-list="defaultList"
              :on-success="handleSuccess"
              :format="['jpg','jpeg','png']"
              :max-size="2048"
              :on-format-error="handleFormatError"
              :on-exceeded-size="handleMaxSize"
              :before-upload="handleBeforeUpload"
              multiple
              type="drag"
              action="//jsonplaceholder.typicode.com/posts/"
              style="display: inline-block;width:58px;"
            >
              <div style="width: 58px;height:58px;line-height: 58px;">
                <Icon type="ios-camera" size="20"></Icon>
              </div>
            </Upload>
            <Modal title="View Image" v-model="visible">
              <img
                :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'"
                v-if="visible"
                style="width: 100%"
              />
            </Modal>
            
          </div>
          <div class="template-item-text"> 
            <Button type="primary" @click="time">图片</Button>
            </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultList: [],
      imgName: "",
      visible: false,
      uploadList: []
    };
  
  },
  methods: {
     time () {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: 'This notification does not automatically close, and you need to click the close button to close.',
                    duration: 0
                });
            },
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess(res, file) {
      file.url =
        "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar";
      file.name = "7eb99afb9d5f317c912f08b5212fd69a";
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png."
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M."
      });
    },
    handleBeforeUpload() {
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: "Up to five pictures can be uploaded."
        });
      }
      return check;
    }
    
  },
  mounted() {
    this.uploadList = this.$refs.upload.fileList;
  }
};
</script>

<style>
    .page-container {
    width: 100%;
    padding: 24px 0;
    overflow: hidden;
}
.page-manage .page-template {
    width: 256px;
    min-height: 700px;
}

.bg-white {
    background: #fff;
}
h3 {
    height: 40px;
    line-height: 40px;
    padding-left: 16px;
}

</style>