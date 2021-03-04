package org.apache.dolphinscheduler.dao.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.dolphinscheduler.dao.entity.BasicRole;
import org.apache.dolphinscheduler.dao.entity.User;
import org.apache.ibatis.annotations.Param;

public interface BasicRoleMapper extends BaseMapper<BasicRole> {

    /**
     * role page
     * @param page page
     * @param roleName roleName
     * @return role IPage
     */
    IPage<BasicRole> queryRolePaging(Page page,
                                @Param("roleName") String roleName);

}