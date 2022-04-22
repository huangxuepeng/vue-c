import { request } from '@/services/axios-http.js';

// let config = {} 这个里面可以传入一些基地址 然后传入下面的方法里面  例如 const API = request(config)
const _API = request();
// 配置请求头的这样类似的参数
// const _initConfig = {};
// const _authAPI = request(_initConfig);

/**
 * @params : method url params
 * @return : 接口响应的数据
 * @description :
 * @date : 2020-10-30 09:21
 * @author : huanghe
 */

// example
export const _exampleAPI = (params) => _API('GET', 'api/test', params);

// 获取全部动态
export const GetDynamic = (params) => _API('GET', '/u/v1/dynamic/getDynamic', params);
// 获取头部通知栏
export const Notices = (params) => _API('GET', '/u/v1/notice/getnotice', params);
// 登录
export const Login = (params) => _API('POST', '/u/v1/user/login', params);
// 获取用户详细信息
export const UserDetail = (params) => _API('GET', '/u/v1/user/getid/'+params, params);
// 发表动态
export const PublishDynamic = (params) => _API('POST', '/u/v1/dynamic/publishDynamic', params);
// 根据动态ID获取动态详情
export const GetDynamicByID = (params) => _API('GET', '/u/v1/dynamic/getDynamicbyid/'+params, params);
// 动态点赞
export const DynamicLike = (params) => _API('POST', '/u/v1/dynamic/dynamiclike', params);
// 动态收藏
export const DynamicStar = (params) => _API('POST', '/u/v1/dynamic/stardynamic', params);
// 发布评论
export const PushDynamicComment = (params) => _API('POST', '/u/v1/dynamic/pushDynamicComment', params);
// 评论的回复
export const PushDynamicCommentReply = (params) => _API('POST', '/u/v1/dynamic/pushDynamicCommentReply', params);

// 异性列表
export const OppositeSex = (params) => _API('POST', '/u/v1/sex/getoppsitesex', params);