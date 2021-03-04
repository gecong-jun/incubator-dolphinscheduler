package org.apache.dolphinscheduler.api.controller;

import java.util.List;
import java.util.Map;

import javax.validation.constraints.NotBlank;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import org.apache.dolphinscheduler.api.controller.BaseController;
import org.apache.dolphinscheduler.api.enums.Status;
import org.apache.dolphinscheduler.api.exceptions.ApiException;
import org.apache.dolphinscheduler.api.service.BasicRoleService;
import org.apache.dolphinscheduler.api.utils.Result;
import org.apache.dolphinscheduler.common.Constants;
import org.apache.dolphinscheduler.common.utils.ParameterUtils;
import org.apache.dolphinscheduler.dao.entity.BasicRole;
import org.apache.dolphinscheduler.dao.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;




import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import springfox.documentation.annotations.ApiIgnore;

import static org.apache.dolphinscheduler.api.enums.Status.*;

@RestController
@RequestMapping("/role")
@Api(tags = "角色管理", produces = "application/json")
public class BasicRoleController extends BaseController {
	private static final Logger logger = LoggerFactory.getLogger(BasicRoleController.class);

	@Autowired
	private BasicRoleService basicRoleService;

//	@Autowired
//	private BasicResourceShowService basicResourceShowService;
//
//	@Autowired
//	private BasicRoleResourceService basicRoleResourceService;

	@ApiOperation(value = "添加角色信息", notes = "根据BasicRoleDTO对象创建角色")
	@RequestMapping(value = "/addRole", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	@ApiException(CREATE_ROLE_ERROR)
	// @PreAuthorize("hasAuthority('addRole')")
	public Result addRole(@ApiIgnore @RequestAttribute(value = Constants.SESSION_USER) User loginUser,
			@RequestParam(value = "roleName") String roleName,
			@RequestParam(value = "isDisable") Boolean isDisable) throws Exception {
		Map<String, Object> result =basicRoleService.addRole(loginUser,roleName,isDisable);
		return returnDataList(result);
	}


	/**
	 * delete user by id
	 *
	 * @param loginUser login user
	 * @param id        user id
	 * @return delete result code
	 */
	@ApiOperation(value = "delRoleById", notes = "DELETE_ROLE_BY_ID_NOTES")
	@ApiImplicitParams({
			@ApiImplicitParam(name = "id", value = "ROLE_ID", dataType = "Int", example = "100")
	})
	@PostMapping(value = "/delete")
	@ResponseStatus(HttpStatus.OK)
	@ApiException(DELETE_ROLE_BY_ID_ERROR)
	public Result delUserById(@ApiIgnore @RequestAttribute(value = Constants.SESSION_USER) User loginUser,
							  @RequestParam(value = "id") int id) throws Exception {
		logger.info("login user {}, delete user, userId: {},", loginUser.getUserName(), id);
		Map<String, Object> result = basicRoleService.deleteRoleById(loginUser, id);
		return returnDataList(result);
	}


	/**
	 * update role
	 *
	 * @param loginUser login user
	 * @param roleName      role name
	 * @param isDisable      state
	 * @return update result code
	 */
	@PostMapping(value = "/update")
	@ResponseStatus(HttpStatus.OK)
	@ApiException(UPDATE_ROLE_ERROR)
	public Result updateUser(@ApiIgnore @RequestAttribute(value = Constants.SESSION_USER) User loginUser,
							 @RequestParam(value = "id") int id,
							 @RequestParam(value = "roleName") String roleName,
							 @RequestParam(value = "isDisable") Boolean isDisable) throws Exception {
		logger.info("login user {}, update role, roleName: {}, isDisable: {}",
				loginUser.getUserName(), roleName, isDisable);
		Map<String, Object> result = basicRoleService.updateRole(loginUser, id, roleName, isDisable);
		return returnDataList(result);
	}


	/**
	 * query role list paging
	 *
	 * @param loginUser login user
	 * @param pageNo    page number
	 * @param searchVal search avlue
	 * @param pageSize  page size
	 * @return user list page
	 */
	@ApiOperation(value = "queryRoleList", notes = "QUERY_ROLE_LIST_NOTES")
	@ApiImplicitParams({
			@ApiImplicitParam(name = "pageNo", value = "PAGE_NO", dataType = "Int", example = "1"),
			@ApiImplicitParam(name = "pageSize", value = "PAGE_SIZE", dataType = "Int", example = "10"),
			@ApiImplicitParam(name = "searchVal", value = "SEARCH_VAL", type = "String")
	})
	@GetMapping(value = "/list-paging")
	@ResponseStatus(HttpStatus.OK)
	@ApiException(QUERY_ROLE_LIST_PAGING_ERROR)
	public Result queryUserList(@ApiIgnore @RequestAttribute(value = Constants.SESSION_USER) User loginUser,
								@RequestParam("pageNo") Integer pageNo,
								@RequestParam("pageSize") Integer pageSize,
								@RequestParam(value = "searchVal", required = false) String searchVal) {
		logger.info("login user {}, list user paging, pageNo: {}, searchVal: {}, pageSize: {}",
				loginUser.getUserName(), pageNo, searchVal, pageSize);
		Map<String, Object> result = checkPageParams(pageNo, pageSize);
		if (result.get(Constants.STATUS) != Status.SUCCESS) {
			return returnDataListPaging(result);
		}
		searchVal = ParameterUtils.handleEscapes(searchVal);
		result = basicRoleService.queryRoleList(loginUser, searchVal, pageNo, pageSize);
		return returnDataListPaging(result);
	}


	/**
	 * role list no paging
	 *
	 * @param loginUser login user
	 * @return role list
	 */
	@GetMapping(value = "/list-all")
	@ResponseStatus(HttpStatus.OK)
	@ApiException(USER_LIST_ERROR)
	public Result listAll(@RequestAttribute(value = Constants.SESSION_USER) User loginUser) {
		logger.info("login user {}, role list", loginUser.getUserName());
		Map<String, Object> result = basicRoleService.queryUserList(loginUser);
		return returnDataList(result);
	}


//	@ApiOperation(value = "获取角色管理集合", notes = "根据SearchBasicRoleDTO对象获取资源集合(分页)")
//	@RequestMapping(value = "/searchRole", method = RequestMethod.POST)
//	// @PreAuthorize("hasAuthority('searchRole')")
//	@GwiLog(isRecordRespParams = false)
//	public Wrapper<Pagination<BasicRoleVO>> searchRole(@RequestBody SearchBasicRoleDTO search) {
//		return Wrapper.ok(basicRoleService.searchRole(search));
//	}
//
//	@ApiOperation(value = "获取角色管理集合", notes = "根据SearchBasicRoleDTO对象获取资源集合(分页)")
//	@RequestMapping(value = "/searchWebRole", method = RequestMethod.POST)
//	// @PreAuthorize("hasAuthority('searchRole')")
//	@GwiLog(isRecordRespParams = false)
//	public Wrapper<Pagination<BasicRoleVO>> searchWebRole(@RequestBody SearchBasicRoleDTO search) {
//		String userId = SecurityUtil.getUserId();
//		if (!"0".equals(userId)) {
//			search.setLeader(SecurityUtil.getUserId());
//			search.setRoleType(0);
//		}
//		return Wrapper.ok(basicRoleService.searchRole(search));
//	}

//	@ApiOperation(value = "设置角色资源信息", notes = "设置角色资源信息")
//	@RequestMapping(value = "/doAssignResource", method = RequestMethod.POST)
//	// @PreAuthorize("hasAuthority('roleAssignResource')")
//	public Wrapper<Integer> doAssignResource(@RequestBody BasicWebAssignRoleResourceDTO basicWebAssignRoleResourceDTO) {
//		String operator = SecurityUtil.getUserId();
//		String roleId = basicWebAssignRoleResourceDTO.getRoleId();
//		List<String> resIds = basicWebAssignRoleResourceDTO.getResIds();
//		BasicAssignRoleResourceDTO basicAssignRoleResourceDTO = new BasicAssignRoleResourceDTO();
//		basicAssignRoleResourceDTO.setOperator(operator);
//		basicAssignRoleResourceDTO.setRoleId(roleId);
//		basicAssignRoleResourceDTO.setResIds(resIds);
//		return Wrapper.ok(basicRoleService.doAssignRoleResource(basicAssignRoleResourceDTO));
//	}
//
//	@ApiOperation(value = "获取角色资源", notes = "设置角色资源信息")
//	@RequestMapping(value = "/listRoleResourceTree", method = RequestMethod.POST)
//	// @PreAuthorize("hasAuthority('roleAssignResource')")
//	@GwiLog(isRecordRespParams = false)
//	public Wrapper<List<BasicResourceShowTreeNodeVO>> listRoleResourceTree(
//			@RequestBody ListBasicWebRoleResourceTreeDTO listBasicWebRoleResourceTreeDTO) {
//		ListBasicResourceShowTreeDTO listSearch = new ListBasicResourceShowTreeDTO();
//		// listSearch.setRoleIds(Lists.newArrayList(listBasicWebRoleResourceTreeDTO.getRoleId()));
//		String operator = SecurityUtil.getUserId();
//		if (!GwiUtil.isEmpty(operator) && !"0".equals(operator)) {
//			listSearch.setUserId(operator);
//		}
//		// listSearch.setChannelType(0);b
//		listSearch.setTemplate(listBasicWebRoleResourceTreeDTO.getTemplate());
//		// listSearch.setResTypes(Arrays.asList(1, 2));
//		return Wrapper.ok(basicResourceShowService
//				.removeListItem(basicResourceShowService.listBasicResourceShowTree(listSearch)));
//	}
//
//	@ApiOperation(value = "获取角色资源集合ID")
//	@RequestMapping(value = "/listRoleResId/{roleId}", method = RequestMethod.GET)
//	// @PreAuthorize("hasAuthority('roleAssignResource')")
//	@GwiLog(isRecordRespParams = false)
//	public Wrapper<List<String>> listResIdByRoleId(@PathVariable(value = "roleId") @NotBlank String roleId) {
//		return Wrapper.ok(basicRoleResourceService.listResIdByRoleId(roleId));
//	}
}
