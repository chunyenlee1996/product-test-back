import { StatusCodes } from 'http-status-codes'

/**
 * 檢查請求的 Content-Type
 * @param{String} type Content-Type
 * @return express middleWare function
 */

export default (type) => {
  return (req, res, next) => {
    if (!req.headers['content-type'] || !req.headers['content-type'].includes(type)) {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: '格式錯誤'
      })
      return
    }
    next()
  }
}
