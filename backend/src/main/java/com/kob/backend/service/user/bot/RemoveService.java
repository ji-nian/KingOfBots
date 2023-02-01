package com.kob.backend.service.user.bot;

import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: jinian
 * @Date: 2023/01/06/23:33
 * @Description:
 */
public interface RemoveService {
    Map<String, String> remove(Map<String, String> data);
}
