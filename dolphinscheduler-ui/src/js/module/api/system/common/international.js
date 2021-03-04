import topic from  '../../../cfg/topic';
import SRCB_O2LOGIN from  '../../../api/util/http';

export default class LIST_DICT extends SRCB_O2LOGIN {
    constructor() {
        super(
            {
                url: topic.businessUserTopic + "/i18n/addOrUpdateI18n",
                method: 'post',
            },
            {version: '2.0'}
        );
    }

    async commit({appId, context, i18nKey, locale}) {
        return super.commit({appId, context, i18nKey, locale});
    }
        
};    