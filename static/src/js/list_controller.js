/** @odoo-module **/

import { ListController } from "@web/views/list/list_controller";
import { patch } from "@web/core/utils/patch";
import { useService } from "@web/core/utils/hooks";    

patch(ListController.prototype,"school_edit_button",{
    setup(){
        this._super.apply();
        this.action = useService("action");
    },

    editSelectedStudentSchoolEvent(){
        this.action.doAction({
            type:'ir.actions.act_window',
            name:'Select School',
            view_mode:'form',
            target:'new',
            res_model:'set.default.school.wiz',
            views:[[false,'form']],
            context:'{"default_student_ids":['+ this.model.root.selection.map((student)=> student.resId) +']}'
        })
    }
});
