package com.kob.backend.service.ranklist;

import com.alibaba.fastjson.JSONObject;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: jinian
 * @Date: 2023/02/15/19:32
 * @Description:
 */
public interface GetRanklistService {
    JSONObject getList(Integer page);
}
