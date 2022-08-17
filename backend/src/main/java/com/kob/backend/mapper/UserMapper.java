package com.kob.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.kob.backend.pojo.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: jinian
 * @Date: 2022/08/17/0:02
 * @Description:
 */

@Mapper
public interface UserMapper extends BaseMapper<User> {

}
