package com.kob.backend.service.user.account;

import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: jinian
 * @Date: 2022/08/19/23:34
 * @Description:
 */
public interface LoginService {
    public Map<String, String> getToken(String username, String password);
}
