/**
 * Generated by @openapi-codegen
 *
 * @version v1
 */
export type NsResourceCollection = {
  links?: NsLink[];
  /*
   * @format int64
   */
  totalResults?: number;
  items?: NsResource[];
  /*
   * @format int64
   */
  count?: number;
  hasMore?: boolean;
  /*
   * @format int64
   */
  offset?: number;
};

export type NsResource = {
  id?: string;
  refName?: string;
  externalId?: string;
  links?: NsLink[];
};

/**
 * @x-ns-custom-record true
 */
export type CustomrecordPropertyRecord = {
  /*
   * @x-ns-custom-field true
   */
  custrecord_temp_inline?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_rec_other?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_property_photos?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_sale_email_to_agent_sent_chk?: boolean;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_sale_email_to_agent_appr_date?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_mw_additional_agent?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_update_file_folders?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_matched_in_fischer_doc?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_property_show_lot_number?: boolean;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_property_date_sales_st_update?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_commission_percent?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_prop_sales_mgr_email?: string | null;
  /*
   * @format double
   * @x-ns-custom-field true
   */
  custrecord_last_csv_price?: number | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_selling_agent_comments?: string | null;
  /*
   * @format double
   * @x-ns-custom-field true
   */
  custrecord_loan_amount?: number | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_elevation?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_primary_agent_id_free_form?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_emailed_listing_mls?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_extend_pr_gen_public_up_link?: boolean;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_contract_received_date?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_listing_date_mls_region2?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_is_changed?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_property_list_cabinet_files?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_mw_additional_agent_role?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_listing_date_mls_region1?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_real_estate_agent_id_region_2?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_real_estate_agent_id_region_1?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_mw_check_remarks?: boolean;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_closing_date_mls_region1?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_closing_date_mls_region2?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_property_dual_region_key?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_extend_files_uploadon_propert?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_mw_construction_start_date?: string | null;
  /*
   * @format int64
   * @x-ns-custom-field true
   */
  custrecord_upper_living_area?: number | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_mls_number_region2?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_mls_number_region1?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_city?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_listing_agreement?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_property_url_from_builder?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_report_run_date?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_automated_agent_remark?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_external_file_link?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_sub_abbr?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_corner_lot?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecordprop_division_mgr_email?: string | null;
  /*
   * @x-ns-custom-field true
   */
  externalId?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_entered_mls?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_general_property_notes?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_closing_notes?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_extend_pr_public_upload_link?: string | null;
  /*
   * @x-ns-custom-field true
   */
  scriptId?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_estimated_closing_date?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_sale_email_to_agent_sent_date?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_agent_remarks?: string | null;
  /*
   * @format double
   * @x-ns-custom-field true
   */
  custrecord_original_listing_price?: number | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_concessions?: string | null;
  /*
   * @format int64
   * @x-ns-custom-field true
   */
  custrecord_file_folder_id?: number | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_subdiv_agnt_rem_ref?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_mw_email_sent?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_mls_direct_link?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_proofed_for_mls?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_mw_enter_as_team?: boolean;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_estimated_completion_date?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_mls_1_email?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_purchase_contract?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord66?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_house_number?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord63?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord62?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_hms_update_price_hidden?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord64?: string | null;
  /*
   * @x-ns-custom-field true
   */
  name?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_extra_selection_photos_added?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_lot_number?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_estimated_under_roof_date?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_initial_photo?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_ready_to_be_entered?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_subd_abbr_w_stored_value?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_agent_letter_not_sent_auto?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_zip_code?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_rec_permit?: boolean;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_resend_closing_notification?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_secondary_address?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_rec_mkt_home_info?: boolean;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_mw_last_reminder_date?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_read_only_financing_type?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_date_received?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_mw_reminder_date_from_builder?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_show_property_construction?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_hud1?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_broker_office_id_mlsregion2?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_additional_agent_id_free_form?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_extend_pr_file_list?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord19?: string | null;
  /*
   * @x-ns-custom-field true
   */
  id?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord18?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_sale_email_to_agent_appr_chk?: boolean;
  /*
   * @format int64
   * @x-ns-custom-field true
   */
  custrecord_total_living_area?: number | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord23?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord25?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord24?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_sale_notes?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_extend_pr_pubic_upload_uuid?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord20?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_abhi_prop_feature_ghost?: string | null;
  /*
   * @format int64
   * @x-ns-custom-field true
   */
  custrecord_total_basement?: number | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_subdivision_text?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_prop_builder_closing_costs?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_rec_photo?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord26?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord__prop_hms_callback_number?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_list_date?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_secret_code?: string | null;
  /*
   * @format double
   * @x-ns-custom-field true
   */
  custrecord_seller_paid_closing_costs?: number | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_proofed_date_time?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_hud_received_date?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_market_home_info?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_financing_company?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_email_to_mls?: boolean;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_date_of_last_record_update?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_listing_notes?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord39?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_mlsinfo_employee?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_job_number?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_property_date_const_update?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_sellers_iniitals?: string | null;
  /*
   * @format double
   * @x-ns-custom-field true
   */
  custrecord50?: number | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_agent_involved_in_sale?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_buyers_last_name?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord45?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_force_sales_notification?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord44?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord41?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_coop_commission?: string | null;
  /*
   * @format int64
   * @x-ns-custom-field true
   */
  custrecord_main_living_area?: number | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_temporarily_on_hold?: boolean;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_pending_date_mls_region2?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_pending_date_mls_region1?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_enable_sales_notifications?: boolean;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_mw_scheduled_date?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_area?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_listing_agreement_doc?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_closed_printfull2?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_closed_printfull1?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_agent_name_sn?: string | null;
  /*
   * @format date-time
   * @x-ns-custom-field true
   */
  created?: string | null;
  /*
   * @format double
   * @x-ns-custom-field true
   */
  custrecord_estimated_closing_price?: number | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_selling_team_name?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_expiration_date?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_additional_selling_agent_id?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_permit?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_build_name_in_public_remark_p?: boolean;
  /*
   * @format date-time
   * @x-ns-custom-field true
   */
  lastmodified?: string | null;
  /*
   * @format double
   * @x-ns-custom-field true
   */
  custrecord_current_list_price?: number | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_whatever_name?: string | null;
  /*
   * @x-ns-custom-field true
   */
  isInactive?: boolean;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_contract_approval_date?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_brokerage_name_sn?: string | null;
  /*
   * @format int64
   * @x-ns-custom-field true
   */
  custrecord_square_feet?: number | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_simple_name?: string | null;
  /*
   * @format date-time
   * @x-ns-custom-field true
   */
  custrecord_ctb_ghost_request_received?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_disable_bsr_update?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_sellers_signature?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_actual_closing_date?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_last_record_update_type?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_primary_selling_agent_email?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_mw_enable_test_property_email?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_real_estate_broker_id_mls1?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_display_paid_closing_cost?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_commission?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_last_record_update_source?: string | null;
  /*
   * @format date
   * @x-ns-custom-field true
   */
  custrecord_sales_notification_sent?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_mls_region_2_email?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_pending_printfull2?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_pending_printfull1?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_use_rendering?: boolean;
  /*
   * @x-ns-custom-field true
   */
  custrecord_street_text?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_hms_signature?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_show_agent_encourage_prop?: boolean;
  /*
   * @format int64
   * @x-ns-custom-field true
   */
  custrecord_finished_lower_level?: number | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_mw_primary_selling_agent?: string | null;
  /*
   * @x-ns-custom-field true
   */
  custrecord_prop_builder_preferred_lender?: string | null;
  refName?: string;
  links?: NsLink[];
  custrecord_mw_last_listing_amd?: NsResource;
  custrecord_mw_closing_submitted_by?: NsResource;
  owner?: NsResource;
  custrecord_construction_status_contract?: NsResource;
  custrecord_top_level_builder?: NsResource;
  custrecord_current_construction?: NsResource;
  custrecord_mw_sale_submitted_by?: NsResource;
  custrecord_created?: NsResource;
  custrecord_mw_build_opt_personnel_select?: NsResource;
  custrecord_selling_bsr?: NsResource;
  custrecord_property_bsr_team_members?: NsResourceCollection;
  custrecord_time_zone?: NsResource;
  custrecord43?: NsResource;
  custrecord42?: NsResource;
  custrecord_property_bsr_team_type?: NsResource;
  custrecord_construction_status_listing?: NsResource;
  custrecord_property_status?: NsResource;
  custrecord_state?: NsResource;
  custrecord_proofed_by?: NsResource;
  custrecord_mw_sched_notif_type?: NsResource;
  custrecord_user_entered_sales_status?: NsResource;
  custrecordcustrecordsubdname?: NsResource;
  custrecord_in_charge?: NsResource;
  custrecord_floorplan?: NsResource;
  custrecord31?: NsResource;
  custrecord_property_bsr_team?: NsResource;
  custrecord_mw_build_pers_tobe_reminded?: NsResource;
  custrecord_modified?: NsResource;
  custrecord_property_assigned_to?: NsResource;
  custrecord_mw_related?: CustomrecordPropertyRecord;
  custrecord_mw_subdivision_sale_contact?: NsResource;
  custrecord_financing_type?: NsResource;
  custrecord_real_estate_broker_name?: NsResource;
  custrecord29?: NsResource;
  custrecord_mw_builder_personnel_notified?: NsResource;
  custrecord28?: NsResource;
  custrecord_additional_agent_record?: NsResource;
  custrecord61?: NsResource;
  custrecord_listing_type?: NsResource;
  custrecord22?: NsResource;
  custrecord_real_estate_agent_name?: NsResource;
  custrecord21?: NsResource;
  custrecord15?: NsResource;
  custrecord13?: NsResource;
  custrecord12?: NsResource;
  custrecord17?: NsResource;
  custrecord16?: NsResource;
  custrecord51?: NsResource;
  custrecord11?: NsResource;
  custrecord10?: NsResource;
  custrecord_mw_subdiv_closing_contact?: NsResource;
  custrecord_mw_sched_notif_personnel?: NsResource;
};

export type NsError = {
  /*
   * A URI reference to the documentation about the problem type.
   *
   * @format URI
   */
  type?: string;
  /*
   * A human-readable description of the problem type.
   */
  title?: string;
  /*
   * The HTTP status code generated by the server the request originates from.
   *
   * @format int32
   */
  status?: number;
  /*
   * An array containing one or more problem types.
   */
  ["o:errorDetails"]?: {
    /*
     * A detailed, human-readable description of the problem occurrence.
     */
    detail?: string;
    /*
     * The JSON path that indicates where the problem occurs within the request body.
     *
     * @format JSONPath
     */
    ["o:errorPath"]?: string;
    /*
     * The URI of the first element in the request URL where the problem occurs.
     *
     * @format URI
     */
    ["o:errorUrl"]?: string;
    /*
     * The name of the HTTP header where the problem occurs.
     */
    ["o:errorHeader"]?: string;
    /*
     * The name of the query parameter where the problem occurs.
     */
    ["o:errorQueryParam"]?: string;
    /*
     * The application-specific error code. Similar problem types are grouped together.
     */
    ["o:errorCode"]?: string;
  }[];
};

export type NsLink = {
  rel?: string;
  href?: string;
};

export type CustomrecordPropertyRecordCollection = {
  /*
   * @format int64
   */
  totalResults?: number;
  /*
   * An array field that represents a collection of elements, for example, sublist lines, multiselect items, or search results.
   */
  items?: CustomrecordPropertyRecord[];
  links?: NsLink[];
  /*
   * @format int64
   */
  count?: number;
  hasMore?: boolean;
  /*
   * @format int64
   */
  offset?: number;
};