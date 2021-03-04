import topic from '../../../../module/cfg/topic';
import SRCB_O2LOGIN from '../../../../module/api/util/http';
import {FOLDER, VIEW, MENU, TEMPLATE_ID} from '../../../../module/resource';

class ADD_FOLDER extends SRCB_O2LOGIN {
    constructor () {
        super(
          {
            url:topic.businessUserTopic + "/resourceShow/addResourceShow",
            method:'post',
          },
          {version:'2.0'}
        );
    }

    commit ({parentId, resName}) {    
        return new Promise((resolve, reject) => {
           super.commit({
                parentId,resName,
                show:true,
                template:TEMPLATE_ID
           }).then((data) => {
               resolve(data);
           }, (err) => {
               reject(err); 
           }); 
        });
    }
}
class REMOVE_FOLDER extends SRCB_O2LOGIN {
    constructor () {
        super(
          {
            url:topic.businessUserTopic + "/resourceShow/delResourceShow",
            method:'DELETE',
          },
          {version:'2.0'}
        );
    }

    commit ({id}) {    
        return new Promise((resolve, reject) => {
           super.commit({
                id
           }).then((data) => {
               resolve(data);
           }, (err) => {
               reject(err); 
           }); 
        });
    }
}

class UPDATE_FOLDER extends SRCB_O2LOGIN {
    constructor () {
        super(
          {
            url:topic.businessUserTopic + "/resourceShow/updateResourceShow",
            method:'post',

          },
          {version:'2.0'}
        );
    }

    async commit (folderData) {    
        return new Promise((resolve, reject) => {
           super.commit(folderData).then((data) => {
               resolve(data);
           }, (err) => {
               reject(err); 
           });
        });
    }

    async changeName (name, data) {
        let foldData = Object.assign(data, {resName:name, template:TEMPLATE_ID});
        this.commit(foldData);
    }

    async changeParentId (parentId, data) {
        let foldData = Object.assign(data, {parentId, template:TEMPLATE_ID});
        this.commit(foldData);
    }
}    

export default class RESOURCE_FOLDER {
    constructor () {
      this._addFolder = new ADD_FOLDER();
      this._removeFolder = new REMOVE_FOLDER();
      this._updateFolder = new UPDATE_FOLDER();
    }
    async addFolder ({parentId, resName}) {
        this._addFolder.commit({parentId, resName});
    }
    async removeFolder ({id}) {
        this._removeFolder.commit({id});
    }
    async changeFolderName (name, data) {
        this._updateFolder.changeName(name, data);
    }
    async changeFolderParent (parentId, data) {
        this._updateFolder.changeParentId(parentId, data);
    }    
}    
