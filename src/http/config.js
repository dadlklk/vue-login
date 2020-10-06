// 导入部分，引入非 default 时，使用花括号
//@/标识src路径下
import {baseUrl} from "@/utils/global";

export default {
  method: "get",
  //基础Url前缀
  baseUrl: baseUrl,
  //请求头信息
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
  //参数
  data: {},
  timeout: 10000,
  withCredentials: true,
  responseType: "json"

}


