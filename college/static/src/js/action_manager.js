/** @odoo-module */
import { registry } from "@web/core/registry";
import { download } from "@web/core/network/download";
import framework from 'web.framework';
import session from 'web.session';
registry.category("ir.actions.report handlers").add("college_marksheet_xlsx", async (action) => {
   if (action.report_type === 'marksheet_xlsx') {
       framework.blockUI();
       var def = $.Deferred();
       session.get_file({
           url: '/xlsx_reports',
           data: action.data,
           success: def.resolve.bind(def),
           error: (error) => this.call('crash_manager', 'rpc_error', error),
           complete: framework.unblockUI,
       });
       return def;
   }
});