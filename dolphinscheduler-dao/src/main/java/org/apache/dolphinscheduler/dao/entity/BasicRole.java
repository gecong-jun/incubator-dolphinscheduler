package org.apache.dolphinscheduler.dao.entity;

import java.util.Date;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;


@TableName("t_ds_role")
public class BasicRole {
	/**
	 * 创建人
	 */
	@TableId(value = "id", type = IdType.AUTO)
	private String id;

	@TableField("role_type")
	private Integer roleType;

	/**
	 * 角色名称
	 */
	@TableField("role_name")
	private String roleName;

	/**
	 * 角色编号
	 */
	@TableField("role_code")
	private String roleCode;


	/**
	 * 角色状态
	 */
	@TableField("is_disable")
	private Boolean isDisable;

	/**
	 * 创建时间
	 */
	@TableField("create_time")
	private Date createTime;

	/**
	 * 修改时间
	 */
	@TableField("update_time")
	private Date updateTime;



	/**
	 * 获取id
	 *
	 * @return id - id
	 */
	public String getId() {
		return id;
	}

	/**
	 * 设置id
	 *
	 * @param id
	 *
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return role_type
	 */
	public Integer getRoleType() {
		return roleType;
	}

	/**
	 * @param roleType
	 */
	public void setRoleType(Integer roleType) {
		this.roleType = roleType;
	}

	/**
	 * 获取角色名称
	 *
	 * @return role_name - 角色名称
	 */
	public String getRoleName() {
		return roleName;
	}

	/**
	 * 设置角色名称
	 *
	 * @param roleName
	 *            角色名称
	 */
	public void setRoleName(String roleName) {
		this.roleName = roleName == null ? null : roleName.trim();
	}

	/**
	 * 获取角色编号
	 *
	 * @return role_code - 角色编号
	 */
	public String getRoleCode() {
		return roleCode;
	}

	/**
	 * 设置角色编号
	 *
	 * @param roleCode
	 *            角色编号
	 */
	public void setRoleCode(String roleCode) {
		this.roleCode = roleCode == null ? null : roleCode.trim();
	}


	/**
	 * 获取角色状态
	 *
	 * @return is_disable - 角色状态
	 */
	public Boolean getIsDisable() {
		return isDisable;
	}

	/**
	 * 设置角色状态
	 *
	 * @param isDisable
	 *            角色状态
	 */
	public void setIsDisable(Boolean isDisable) {
		this.isDisable = isDisable;
	}

	/**
	 * 获取创建时间
	 *
	 * @return create_time - 创建时间
	 */
	public Date getCreateTime() {
		return createTime;
	}

	/**
	 * 设置创建时间
	 *
	 * @param createTime
	 *            创建时间
	 */
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	/**
	 * 获取修改时间
	 *
	 * @return last_time - 修改时间
	 */
	public Date getUpdateTime() {
		return updateTime;
	}

	/**
	 * 设置修改时间
	 *
	 * @param updateTime
	 *            修改时间
	 */
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}



}