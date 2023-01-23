/**
 * @swagger
 * /boards:
 *  get:
 *    summary: 게시글 가져오기
 *    parameters:
 *      - in: query
 *        name: number
 *        type: int
 *    responses:
 *      200:
 *        description: 성공
 *        content: 
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                properties:
 *                  number:
 *                      type: int
 *                      example: 1
 *                  writer:
 *                      type: string
 *                      example: 철수
 *                  title:
 *                      type: string
 *                      example: 타이틀
 *                  contents:
 *                      type: string
 *                      example: 컨텐츠
 */

/**
 * @swagger
 * /boards:
 *  post:
 *    summary: 게시글 등록하기
 *    requestBody:
 *      content:
 *        application/json:
 *            schema:
 *              type: array
 *              items:
 *                properties:
 *                  number:
 *                      type: int
 *                      example: 1
 *                  writer:
 *                      type: string
 *                      example: 철수
 *                  title:
 *                      type: string
 *                      example: 타이틀
 *                  contents:
 *                      type: string
 *                      example: 컨텐츠
 *    responses:
 *      200:
 *        description: 성공
 *        content: 
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                properties:
 *                  number:
 *                      type: int
 *                      example: 1
 *                  writer:
 *                      type: string
 *                      example: 철수
 *                  title:
 *                      type: string
 *                      example: 타이틀
 *                  contents:
 *                      type: string
 *                      example: 컨텐츠
 */