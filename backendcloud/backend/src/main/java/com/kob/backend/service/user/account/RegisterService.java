package com.kob.backend.service.user.account;

import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: jinian
 * @Date: 2022/08/19/23:36
 * @Description:
 */
public interface RegisterService {
    public Map<String, String> register(String username, String password, String confirmedPassword);
}
