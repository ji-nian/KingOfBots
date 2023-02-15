package com.kob.backend.service.record;

import com.alibaba.fastjson.JSONObject;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: jinian
 * @Date: 2023/02/15/16:43
 * @Description:
 */
public interface GetRecordListService {
    JSONObject getList(Integer page);
}
