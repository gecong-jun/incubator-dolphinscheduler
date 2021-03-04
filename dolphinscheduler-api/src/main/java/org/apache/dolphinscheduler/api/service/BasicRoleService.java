
package org.apache.dolphinscheduler.api.service;

import java.io.IOException;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.dolphinscheduler.api.service.impl.BaseServiceImpl;
import org.apache.dolphinscheduler.api.utils.CheckUtils;
import org.apache.dolphinscheduler.api.utils.PageInfo;
import org.apache.dolphinscheduler.common.Constants;
import org.apache.dolphinscheduler.common.utils.EncryptionUtils;
import org.apache.dolphinscheduler.common.utils.StringUtils;
import org.apache.dolphinscheduler.dao.entity.BasicRole;
import org.apache.dolphinscheduler.dao.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.apache.dolphinscheduler.api.enums.Status;
import org.apache.dolphinscheduler.dao.mapper.BasicRoleMapper;

import org.springframework.transaction.annotation.Transactional;


@Service
public class BasicRoleService extends BaseServiceImpl {

	@Autowired
	BasicRoleMapper basicRoleMapper;
	/**
	 * create user, only system admin have permission
	 *
	 * @param loginUser login user
	 * @param roleName role name
	 * @param isDisable  state
	 * @throws Exception exception
	 */
	@Transactional(rollbackFor = Exception.class)
	public Map<String, Object> addRole(User loginUser,
										  String roleName,Boolean isDisable) throws IOException {
		Map<String, Object> result = new HashMap<>();
		BasicRole basicRole = new BasicRole();
		basicRole.setRoleName(roleName);
		basicRole.setIsDisable(isDisable);
		Date now = new Date();
		basicRole.setCreateTime(now);
		basicRole.setUpdateTime(now);
//		basicRole.setLeader(loginUser.getUserName());
		basicRole.setRoleCode("role" + String.format("%03d", new Random().nextInt(999)) + LocalTime.now().format(DateTimeFormatter.ofPattern("HHmmss")));
		basicRoleMapper.insert(basicRole);
		putMsg(result, Status.SUCCESS);
		return result;
	}


	/**
	 * delete role
	 *
	 * @param loginUser login user
	 * @param id role id
	 * @return delete result code
	 * @throws Exception exception when operate hdfs
	 */
	public Map<String, Object> deleteRoleById(User loginUser, int id) throws IOException {
		Map<String, Object> result = new HashMap<>();

		//check exist
		BasicRole tempRole = basicRoleMapper.selectById(id);
		if (tempRole == null) {
			putMsg(result, Status.USER_NOT_EXIST, id);
			return result;
		}

		basicRoleMapper.deleteById(id);
		putMsg(result, Status.SUCCESS);
		return result;
	}



	/**
	 * update role
	 *
	 *
	 * @param loginUser
	 * @param roleName role name
	 * @param isDisable disable
	 * @return update result code
	 * @throws Exception exception
	 */
	public Map<String, Object> updateRole(User loginUser,Integer roleId,
										  String roleName,
										  Boolean isDisable)throws IOException {
		Map<String, Object> result = new HashMap<>();
		result.put(Constants.STATUS, false);


		BasicRole role = basicRoleMapper.selectById(roleId);
		if (role == null) {
			putMsg(result, Status.ROLE_NOT_EXIST, roleId);
			return result;
		}
		if (StringUtils.isNotEmpty(roleName)) {

			QueryWrapper<BasicRole> queryWrapper = new QueryWrapper<BasicRole>();
			queryWrapper.lambda().eq(BasicRole::getRoleName,roleName);
			BasicRole temprole = basicRoleMapper.selectOne(queryWrapper);
			if (temprole != null && ! temprole.getId().equals(roleId)) {
				putMsg(result, Status.ROLE_NAME_EXIST);
				return result;
			}
			role.setRoleName(roleName);
		}


		role.setIsDisable(isDisable);
		Date now = new Date();
		role.setUpdateTime(now);


		basicRoleMapper.updateById(role);
		putMsg(result, Status.SUCCESS);
		return result;
	}


	/**
	 * query role list
	 *
	 * @param loginUser login user
	 * @param pageNo page number
	 * @param searchVal search avlue
	 * @param pageSize page size
	 * @return role list page
	 */
	public Map<String, Object> queryRoleList(User loginUser, String searchVal, Integer pageNo, Integer pageSize) {
		Map<String, Object> result = new HashMap<>();

		Page<BasicRole> page = new Page<>(pageNo, pageSize);

		IPage<BasicRole> scheduleList = basicRoleMapper.queryRolePaging(page, searchVal);

		PageInfo<BasicRole> pageInfo = new PageInfo<>(pageNo, pageSize);
		pageInfo.setTotalCount((int) scheduleList.getTotal());
		pageInfo.setLists(scheduleList.getRecords());
		result.put(Constants.DATA_LIST, pageInfo);
		putMsg(result, Status.SUCCESS);

		return result;
	}


	/**
	 * query role list
	 *
	 * @param loginUser login user
	 * @return role list
	 */
	public Map<String, Object> queryUserList(User loginUser) {
		Map<String, Object> result = new HashMap<>();
		LambdaQueryWrapper<BasicRole> lambdaQueryWrapper = new LambdaQueryWrapper<BasicRole>();
		lambdaQueryWrapper.eq(BasicRole::getIsDisable,false);
		List<BasicRole> roleList = basicRoleMapper.selectList(lambdaQueryWrapper);
		result.put(Constants.DATA_LIST, roleList);
		putMsg(result, Status.SUCCESS);

		return result;
	}
}
