
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/api/auth/login": {
        "post": {
          "operationId": "AuthController_login",
          "summary": "登录",
          "parameters": [
            {
              "name": "user-agent",
              "required": true,
              "in": "header",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoginDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "$ref": "#/components/schemas/LoginToken"
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "Auth - 认证模块"
          ]
        }
      },
      "/api/auth/register": {
        "post": {
          "operationId": "AuthController_register",
          "summary": "注册",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RegisterDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Auth - 认证模块"
          ]
        }
      },
      "/api/account/profile": {
        "get": {
          "operationId": "AccountController_profile",
          "summary": "获取账户资料",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "$ref": "#/components/schemas/AccountInfo"
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "Account - 账户模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/account/logout": {
        "get": {
          "operationId": "AccountController_logout",
          "summary": "账户登出",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Account - 账户模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/account/menus": {
        "get": {
          "operationId": "AccountController_menu",
          "summary": "获取菜单列表",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "type": "array",
                            "items": {
                              "$ref": "#/components/schemas/AccountMenus"
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "Account - 账户模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/account/permissions": {
        "get": {
          "operationId": "AccountController_permissions",
          "summary": "获取权限列表",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "Account - 账户模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/account/update": {
        "put": {
          "operationId": "AccountController_update",
          "summary": "更改账户资料",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AccountUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Account - 账户模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/account/password": {
        "post": {
          "operationId": "AccountController_password",
          "summary": "更改账户密码",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PasswordUpdateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Account - 账户模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/auth/captcha/img": {
        "get": {
          "operationId": "CaptchaController_captchaByImg",
          "summary": "获取登录图片验证码",
          "parameters": [
            {
              "name": "width",
              "required": false,
              "in": "query",
              "description": "验证码宽度",
              "schema": {
                "default": 100,
                "type": "number"
              }
            },
            {
              "name": "height",
              "required": false,
              "in": "query",
              "description": "验证码宽度",
              "schema": {
                "default": 50,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "$ref": "#/components/schemas/ImageCaptcha"
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "Captcha - 验证码模块"
          ]
        }
      },
      "/api/system/users": {
        "get": {
          "operationId": "UserController_list",
          "summary": "获取用户列表",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "schema": {
                "minimum": 1,
                "default": 1,
                "type": "number"
              }
            },
            {
              "name": "pageSize",
              "required": false,
              "in": "query",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "default": 10,
                "type": "number"
              }
            },
            {
              "name": "field",
              "required": false,
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order",
              "required": false,
              "in": "query",
              "schema": {
                "enum": [
                  "ASC",
                  "DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "avatar",
              "required": false,
              "in": "query",
              "description": "头像",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "username",
              "required": false,
              "in": "query",
              "description": "登录账号",
              "schema": {
                "minLength": 4,
                "maxLength": 20,
                "pattern": "/^[\\s\\S]+$/",
                "example": "admin",
                "type": "string"
              }
            },
            {
              "name": "password",
              "required": false,
              "in": "query",
              "description": "登录密码",
              "schema": {
                "pattern": "/^\\S*(?=\\S{6})(?=\\S*\\d)(?=\\S*[A-Z])\\S*$/i",
                "example": "a123456",
                "type": "string"
              }
            },
            {
              "name": "roleIds",
              "required": false,
              "in": "query",
              "description": "归属角色",
              "schema": {
                "type": "array",
                "items": {
                  "type": "number"
                }
              }
            },
            {
              "name": "deptId",
              "required": false,
              "in": "query",
              "description": "归属大区",
              "schema": {
                "example": 1,
                "type": "number"
              }
            },
            {
              "name": "nickname",
              "required": false,
              "in": "query",
              "description": "呢称",
              "schema": {
                "example": "admin",
                "type": "string"
              }
            },
            {
              "name": "email",
              "required": false,
              "in": "query",
              "description": "邮箱",
              "schema": {
                "example": "bqy.dev@qq.com",
                "type": "string"
              }
            },
            {
              "name": "phone",
              "required": false,
              "in": "query",
              "description": "手机号",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "qq",
              "required": false,
              "in": "query",
              "description": "QQ",
              "schema": {
                "minLength": 5,
                "maxLength": 11,
                "pattern": "/^[1-9]\\d{4,10}$/",
                "type": "string"
              }
            },
            {
              "name": "remark",
              "required": false,
              "in": "query",
              "description": "备注",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "status",
              "required": false,
              "in": "query",
              "description": "状态",
              "schema": {
                "example": 0,
                "enum": [
                  0,
                  1
                ],
                "type": "number"
              }
            },
            {
              "name": "_t",
              "required": false,
              "in": "query",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "type": "object",
                            "properties": {
                              "items": {
                                "type": "array",
                                "items": {
                                  "$ref": "#/components/schemas/UserEntity"
                                }
                              },
                              "meta": {
                                "type": "object",
                                "properties": {
                                  "itemCount": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "totalItems": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "itemsPerPage": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "totalPages": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "currentPage": {
                                    "type": "number",
                                    "default": 0
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "System - 用户模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "post": {
          "operationId": "UserController_create",
          "summary": "新增用户",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "System - 用户模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/system/users/{id}": {
        "get": {
          "operationId": "UserController_read",
          "summary": "查询用户",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserEntity"
                  }
                }
              }
            }
          },
          "tags": [
            "System - 用户模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "put": {
          "operationId": "UserController_update",
          "summary": "更新用户",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "System - 用户模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "delete": {
          "operationId": "UserController_delete",
          "summary": "删除用户",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "oneOf": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "number"
                  }
                ]
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "System - 用户模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/system/users/{id}/password": {
        "post": {
          "operationId": "UserController_password",
          "summary": "更改用户密码",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserPasswordDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "System - 用户模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/system/roles": {
        "get": {
          "operationId": "RoleController_list",
          "summary": "获取角色列表",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "schema": {
                "minimum": 1,
                "default": 1,
                "type": "number"
              }
            },
            {
              "name": "pageSize",
              "required": false,
              "in": "query",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "default": 10,
                "type": "number"
              }
            },
            {
              "name": "field",
              "required": false,
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order",
              "required": false,
              "in": "query",
              "schema": {
                "enum": [
                  "ASC",
                  "DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "name",
              "required": false,
              "in": "query",
              "description": "角色名称",
              "schema": {
                "minLength": 2,
                "type": "string"
              }
            },
            {
              "name": "value",
              "required": false,
              "in": "query",
              "description": "角色值",
              "schema": {
                "minLength": 2,
                "pattern": "/^[a-z0-9]+$/i",
                "type": "string"
              }
            },
            {
              "name": "remark",
              "required": false,
              "in": "query",
              "description": "角色备注",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "status",
              "required": false,
              "in": "query",
              "description": "状态",
              "schema": {
                "enum": [
                  0,
                  1
                ],
                "type": "number"
              }
            },
            {
              "name": "menuIds",
              "required": false,
              "in": "query",
              "description": "关联菜单、权限编号",
              "schema": {
                "type": "array",
                "items": {
                  "type": "number"
                }
              }
            },
            {
              "name": "_t",
              "required": false,
              "in": "query",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "type": "object",
                            "properties": {
                              "items": {
                                "type": "array",
                                "items": {
                                  "$ref": "#/components/schemas/RoleEntity"
                                }
                              },
                              "meta": {
                                "type": "object",
                                "properties": {
                                  "itemCount": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "totalItems": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "itemsPerPage": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "totalPages": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "currentPage": {
                                    "type": "number",
                                    "default": 0
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "System - 角色模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "post": {
          "operationId": "RoleController_create",
          "summary": "新增角色",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RoleDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "System - 角色模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/system/roles/{id}": {
        "get": {
          "operationId": "RoleController_info",
          "summary": "获取角色信息",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "$ref": "#/components/schemas/RoleInfo"
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "System - 角色模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "put": {
          "operationId": "RoleController_update",
          "summary": "更新角色",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RoleUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "System - 角色模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "delete": {
          "operationId": "RoleController_delete",
          "summary": "删除角色",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "System - 角色模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/system/menus": {
        "get": {
          "operationId": "MenuController_list",
          "summary": "获取所有菜单列表",
          "parameters": [
            {
              "name": "type",
              "required": false,
              "in": "query",
              "description": "\n菜单类型:\n- 0: 菜单\n- 1: 目录\n- 2: 权限   \n    ",
              "schema": {
                "enum": [
                  0,
                  1,
                  2
                ],
                "type": "number"
              }
            },
            {
              "name": "parentId",
              "required": false,
              "in": "query",
              "description": "父级菜单",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "name",
              "required": false,
              "in": "query",
              "description": "菜单或权限名称",
              "schema": {
                "minLength": 2,
                "type": "string"
              }
            },
            {
              "name": "orderNo",
              "required": false,
              "in": "query",
              "description": "排序",
              "schema": {
                "minimum": 0,
                "type": "number"
              }
            },
            {
              "name": "path",
              "required": false,
              "in": "query",
              "description": "前端路由地址",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "isExt",
              "required": false,
              "in": "query",
              "description": "是否外链",
              "schema": {
                "default": false,
                "type": "boolean"
              }
            },
            {
              "name": "extOpenMode",
              "required": false,
              "in": "query",
              "description": "外链打开方式",
              "schema": {
                "default": 1,
                "enum": [
                  1,
                  2
                ],
                "type": "number"
              }
            },
            {
              "name": "show",
              "required": false,
              "in": "query",
              "description": "菜单是否显示",
              "schema": {
                "default": 1,
                "enum": [
                  0,
                  1
                ],
                "type": "number"
              }
            },
            {
              "name": "activeMenu",
              "required": false,
              "in": "query",
              "description": "设置当前路由高亮的菜单项，一般用于详情页",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "keepAlive",
              "required": false,
              "in": "query",
              "description": "是否开启页面缓存",
              "schema": {
                "default": 1,
                "enum": [
                  0,
                  1
                ],
                "type": "number"
              }
            },
            {
              "name": "status",
              "required": false,
              "in": "query",
              "description": "状态",
              "schema": {
                "default": 1,
                "enum": [
                  0,
                  1
                ],
                "type": "number"
              }
            },
            {
              "name": "icon",
              "required": false,
              "in": "query",
              "description": "菜单图标",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "permission",
              "required": false,
              "in": "query",
              "description": "对应权限",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "component",
              "required": false,
              "in": "query",
              "description": "菜单路由路径或外链",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "type": "array",
                            "items": {
                              "$ref": "#/components/schemas/MenuItemInfo"
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "System - 菜单权限模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "post": {
          "operationId": "MenuController_create",
          "summary": "新增菜单或权限",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MenuDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "System - 菜单权限模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/system/menus/{id}": {
        "get": {
          "operationId": "MenuController_info",
          "summary": "获取菜单或权限信息",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "System - 菜单权限模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "put": {
          "operationId": "MenuController_update",
          "summary": "更新菜单或权限",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MenuUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "System - 菜单权限模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "delete": {
          "operationId": "MenuController_delete",
          "summary": "删除菜单或权限",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "System - 菜单权限模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/system/menus/permissions": {
        "get": {
          "operationId": "MenuController_getPermissions",
          "summary": "获取后端定义的所有权限集",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "System - 菜单权限模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/system/param-config": {
        "get": {
          "operationId": "ParamConfigController_list",
          "summary": "获取参数配置列表",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "schema": {
                "minimum": 1,
                "default": 1,
                "type": "number"
              }
            },
            {
              "name": "pageSize",
              "required": false,
              "in": "query",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "default": 10,
                "type": "number"
              }
            },
            {
              "name": "field",
              "required": false,
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order",
              "required": false,
              "in": "query",
              "schema": {
                "enum": [
                  "ASC",
                  "DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "name",
              "required": true,
              "in": "query",
              "description": "参数名称",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "_t",
              "required": false,
              "in": "query",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "type": "object",
                            "properties": {
                              "items": {
                                "type": "array",
                                "items": {
                                  "$ref": "#/components/schemas/ParamConfigEntity"
                                }
                              },
                              "meta": {
                                "type": "object",
                                "properties": {
                                  "itemCount": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "totalItems": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "itemsPerPage": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "totalPages": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "currentPage": {
                                    "type": "number",
                                    "default": 0
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "System - 参数配置模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "post": {
          "operationId": "ParamConfigController_create",
          "summary": "新增参数配置",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ParamConfigDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "System - 参数配置模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/system/param-config/{id}": {
        "get": {
          "operationId": "ParamConfigController_info",
          "summary": "查询参数配置信息",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "$ref": "#/components/schemas/ParamConfigEntity"
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "System - 参数配置模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "post": {
          "operationId": "ParamConfigController_update",
          "summary": "更新参数配置",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ParamConfigDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "System - 参数配置模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "delete": {
          "operationId": "ParamConfigController_delete",
          "summary": "删除指定的参数配置",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "System - 参数配置模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/system/log/login/list": {
        "get": {
          "operationId": "LogController_loginLogPage",
          "summary": "查询登录日志列表",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "schema": {
                "minimum": 1,
                "default": 1,
                "type": "number"
              }
            },
            {
              "name": "pageSize",
              "required": false,
              "in": "query",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "default": 10,
                "type": "number"
              }
            },
            {
              "name": "field",
              "required": false,
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order",
              "required": false,
              "in": "query",
              "schema": {
                "enum": [
                  "ASC",
                  "DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "username",
              "required": true,
              "in": "query",
              "description": "用户名",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "ip",
              "required": false,
              "in": "query",
              "description": "登录IP",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "address",
              "required": false,
              "in": "query",
              "description": "登录地点",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "time",
              "required": false,
              "in": "query",
              "description": "登录时间",
              "schema": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            {
              "name": "_t",
              "required": false,
              "in": "query",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "type": "object",
                            "properties": {
                              "items": {
                                "type": "array",
                                "items": {
                                  "$ref": "#/components/schemas/LoginLogInfo"
                                }
                              },
                              "meta": {
                                "type": "object",
                                "properties": {
                                  "itemCount": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "totalItems": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "itemsPerPage": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "totalPages": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "currentPage": {
                                    "type": "number",
                                    "default": 0
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "System - 日志模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/system/log/captcha/list": {
        "get": {
          "operationId": "LogController_captchaList",
          "summary": "查询验证码日志列表",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "schema": {
                "minimum": 1,
                "default": 1,
                "type": "number"
              }
            },
            {
              "name": "pageSize",
              "required": false,
              "in": "query",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "default": 10,
                "type": "number"
              }
            },
            {
              "name": "field",
              "required": false,
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order",
              "required": false,
              "in": "query",
              "schema": {
                "enum": [
                  "ASC",
                  "DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "username",
              "required": true,
              "in": "query",
              "description": "用户名",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "code",
              "required": false,
              "in": "query",
              "description": "验证码",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "time",
              "required": false,
              "in": "query",
              "description": "发送时间",
              "schema": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            {
              "name": "_t",
              "required": false,
              "in": "query",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "type": "object",
                            "properties": {
                              "items": {
                                "type": "array",
                                "items": {
                                  "$ref": "#/components/schemas/CaptchaLogEntity"
                                }
                              },
                              "meta": {
                                "type": "object",
                                "properties": {
                                  "itemCount": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "totalItems": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "itemsPerPage": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "totalPages": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "currentPage": {
                                    "type": "number",
                                    "default": 0
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "System - 日志模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/system/depts": {
        "get": {
          "operationId": "DeptController_list",
          "summary": "获取部门列表",
          "parameters": [
            {
              "name": "name",
              "required": false,
              "in": "query",
              "description": "部门名称",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "type": "array",
                            "items": {
                              "$ref": "#/components/schemas/DeptEntity"
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "System - 部门模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "post": {
          "operationId": "DeptController_create",
          "summary": "创建部门",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DeptDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "System - 部门模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/system/depts/{id}": {
        "get": {
          "operationId": "DeptController_info",
          "summary": "查询部门信息",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DeptEntity"
                  }
                }
              }
            }
          },
          "tags": [
            "System - 部门模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "put": {
          "operationId": "DeptController_update",
          "summary": "更新部门",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DeptDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "System - 部门模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        },
        "delete": {
          "operationId": "DeptController_delete",
          "summary": "删除部门",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "System - 部门模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/tools/storage/list": {
        "get": {
          "operationId": "StorageController_list",
          "summary": "获取本地存储列表",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "schema": {
                "minimum": 1,
                "default": 1,
                "type": "number"
              }
            },
            {
              "name": "pageSize",
              "required": false,
              "in": "query",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "default": 10,
                "type": "number"
              }
            },
            {
              "name": "field",
              "required": false,
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order",
              "required": false,
              "in": "query",
              "schema": {
                "enum": [
                  "ASC",
                  "DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "name",
              "required": true,
              "in": "query",
              "description": "文件名",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "extName",
              "required": true,
              "in": "query",
              "description": "文件后缀",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "type",
              "required": true,
              "in": "query",
              "description": "文件类型",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "size",
              "required": true,
              "in": "query",
              "description": "大小",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "time",
              "required": true,
              "in": "query",
              "description": "上传时间",
              "schema": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            {
              "name": "username",
              "required": true,
              "in": "query",
              "description": "上传者",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "_t",
              "required": false,
              "in": "query",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "type": "object",
                            "properties": {
                              "items": {
                                "type": "array",
                                "items": {
                                  "$ref": "#/components/schemas/StorageInfo"
                                }
                              },
                              "meta": {
                                "type": "object",
                                "properties": {
                                  "itemCount": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "totalItems": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "itemsPerPage": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "totalPages": {
                                    "type": "number",
                                    "default": 0
                                  },
                                  "currentPage": {
                                    "type": "number",
                                    "default": 0
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "Tools - 存储模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/tools/storage/delete": {
        "post": {
          "operationId": "StorageController_delete",
          "summary": "删除文件",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StorageDeleteDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Tools - 存储模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/tools/email/send": {
        "post": {
          "operationId": "EmailController_send",
          "summary": "发送邮件",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EmailSendDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "System - 邮箱模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/tools/upload": {
        "post": {
          "operationId": "UploadController_upload",
          "summary": "上传",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "multipart/form-data": {
                "schema": {
                  "$ref": "#/components/schemas/FileUploadDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Tools - 上传模块"
          ],
          "security": [
            {
              "auth": []
            }
          ]
        }
      },
      "/api/todos": {
        "get": {
          "operationId": "TodoController_list",
          "summary": "获取Todo列表",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "schema": {
                "minimum": 1,
                "default": 1,
                "type": "number"
              }
            },
            {
              "name": "pageSize",
              "required": false,
              "in": "query",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "default": 10,
                "type": "number"
              }
            },
            {
              "name": "field",
              "required": false,
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order",
              "required": false,
              "in": "query",
              "schema": {
                "enum": [
                  "ASC",
                  "DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "value",
              "required": true,
              "in": "query",
              "description": "名称",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "_t",
              "required": false,
              "in": "query",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "type": "array",
                            "items": {
                              "$ref": "#/components/schemas/TodoEntity"
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "Business - Todo模块"
          ]
        },
        "post": {
          "operationId": "TodoController_create",
          "summary": "创建Todo",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TodoDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Business - Todo模块"
          ]
        }
      },
      "/api/todos/{id}": {
        "get": {
          "operationId": "TodoController_info",
          "summary": "获取Todo详情",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ResOp"
                      },
                      {
                        "properties": {
                          "data": {
                            "$ref": "#/components/schemas/TodoEntity"
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "Business - Todo模块"
          ]
        },
        "put": {
          "operationId": "TodoController_update",
          "summary": "更新Todo",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TodoUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Business - Todo模块"
          ]
        },
        "delete": {
          "operationId": "TodoController_delete",
          "summary": "删除Todo",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Business - Todo模块"
          ]
        }
      }
    },
    "info": {
      "title": "sztu-assoction-backend",
      "description": "sztu-assoction-backend API document",
      "version": "1.0",
      "contact": {}
    },
    "tags": [],
    "servers": [],
    "components": {
      "securitySchemes": {
        "auth": {
          "description": "输入令牌（Enter the token）",
          "type": "http",
          "scheme": "bearer",
          "bearerFormat": "JWT"
        }
      },
      "schemas": {
        "LoginToken": {
          "type": "object",
          "properties": {
            "token": {
              "type": "string",
              "description": "JWT身份Token"
            }
          },
          "required": [
            "token"
          ]
        },
        "LoginDto": {
          "type": "object",
          "properties": {
            "username": {
              "type": "string",
              "minLength": 4,
              "description": "手机号/邮箱"
            },
            "password": {
              "type": "string",
              "minLength": 6,
              "pattern": "/^\\S*(?=\\S{6})(?=\\S*\\d)(?=\\S*[A-Z])\\S*$/i",
              "description": "密码",
              "example": "a123456"
            },
            "captchaId": {
              "type": "string",
              "description": "验证码标识"
            },
            "verifyCode": {
              "type": "string",
              "minLength": 4,
              "maxLength": 4,
              "description": "用户输入的验证码"
            }
          },
          "required": [
            "username",
            "password",
            "captchaId",
            "verifyCode"
          ]
        },
        "RegisterDto": {
          "type": "object",
          "properties": {
            "username": {
              "type": "string",
              "description": "账号"
            },
            "password": {
              "type": "string",
              "minLength": 6,
              "maxLength": 16,
              "pattern": "/^\\S*(?=\\S{6})(?=\\S*\\d)(?=\\S*[A-Z])\\S*$/i",
              "description": "密码"
            },
            "lang": {
              "type": "string",
              "description": "语言",
              "examples": [
                "EN",
                "ZH"
              ]
            }
          },
          "required": [
            "username",
            "password",
            "lang"
          ]
        },
        "AccountInfo": {
          "type": "object",
          "properties": {
            "username": {
              "type": "string",
              "description": "用户名"
            },
            "nickname": {
              "type": "string",
              "description": "昵称"
            },
            "email": {
              "type": "string",
              "description": "邮箱"
            },
            "phone": {
              "type": "string",
              "description": "手机号"
            },
            "remark": {
              "type": "string",
              "description": "备注"
            },
            "avatar": {
              "type": "string",
              "description": "头像"
            }
          },
          "required": [
            "username",
            "nickname",
            "email",
            "phone",
            "remark",
            "avatar"
          ]
        },
        "MenuMeta": {
          "type": "object",
          "properties": {
            "creator": {
              "type": "string",
              "description": "创建者"
            },
            "updater": {
              "type": "string",
              "description": "更新者"
            },
            "title": {
              "type": "string"
            },
            "permission": {
              "type": "string"
            },
            "type": {
              "type": "number"
            },
            "icon": {
              "type": "string"
            },
            "orderNo": {
              "type": "number"
            },
            "component": {
              "type": "string"
            },
            "isExt": {
              "type": "boolean"
            },
            "extOpenMode": {
              "type": "number"
            },
            "keepAlive": {
              "type": "number"
            },
            "show": {
              "type": "number"
            },
            "activeMenu": {
              "type": "string"
            },
            "status": {
              "type": "number"
            }
          },
          "required": [
            "title"
          ]
        },
        "AccountMenus": {
          "type": "object",
          "properties": {
            "meta": {
              "$ref": "#/components/schemas/MenuMeta"
            },
            "id": {
              "type": "number"
            },
            "path": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "component": {
              "type": "string"
            }
          },
          "required": [
            "meta",
            "id",
            "path",
            "name",
            "component"
          ]
        },
        "String": {
          "type": "object",
          "properties": {}
        },
        "AccountUpdateDto": {
          "type": "object",
          "properties": {
            "nickname": {
              "type": "string",
              "description": "用户呢称"
            },
            "email": {
              "type": "string",
              "description": "用户邮箱"
            },
            "qq": {
              "type": "string",
              "minLength": 5,
              "maxLength": 11,
              "pattern": "/^\\d+$/",
              "description": "用户QQ"
            },
            "phone": {
              "type": "string",
              "description": "用户手机号"
            },
            "avatar": {
              "type": "string",
              "description": "用户头像"
            },
            "remark": {
              "type": "string",
              "description": "用户备注"
            }
          },
          "required": [
            "nickname",
            "email",
            "qq",
            "phone",
            "avatar",
            "remark"
          ]
        },
        "PasswordUpdateDto": {
          "type": "object",
          "properties": {
            "oldPassword": {
              "type": "string",
              "minLength": 6,
              "maxLength": 20,
              "pattern": "/^[\\s\\S]+$/",
              "description": "旧密码"
            },
            "newPassword": {
              "type": "string",
              "pattern": "/^\\S*(?=\\S{6})(?=\\S*\\d)(?=\\S*[A-Z])\\S*$/i",
              "description": "新密码"
            }
          },
          "required": [
            "oldPassword",
            "newPassword"
          ]
        },
        "ImageCaptcha": {
          "type": "object",
          "properties": {
            "img": {
              "type": "string",
              "description": "base64格式的svg图片"
            },
            "id": {
              "type": "string",
              "description": "验证码对应的唯一ID"
            }
          },
          "required": [
            "img",
            "id"
          ]
        },
        "RoleEntity": {
          "type": "object",
          "properties": {
            "creator": {
              "type": "string",
              "description": "创建者"
            },
            "updater": {
              "type": "string",
              "description": "更新者"
            },
            "name": {
              "type": "string",
              "description": "角色名"
            },
            "value": {
              "type": "string",
              "description": "角色标识"
            },
            "remark": {
              "type": "string",
              "description": "角色描述"
            },
            "status": {
              "type": "number",
              "description": "状态：1启用，0禁用"
            },
            "default": {
              "type": "boolean",
              "description": "是否默认用户"
            },
            "id": {
              "type": "number"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "creator",
            "updater",
            "name",
            "value",
            "remark",
            "status",
            "default",
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "DeptEntity": {
          "type": "object",
          "properties": {
            "creator": {
              "type": "string",
              "description": "创建者"
            },
            "updater": {
              "type": "string",
              "description": "更新者"
            },
            "name": {
              "type": "string",
              "description": "部门名称"
            },
            "orderNo": {
              "type": "number",
              "description": "排序"
            },
            "children": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DeptEntity"
              }
            },
            "parent": {
              "$ref": "#/components/schemas/DeptEntity"
            },
            "id": {
              "type": "number"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "creator",
            "updater",
            "name",
            "orderNo",
            "children",
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "RefreshTokenEntity": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "expired_at": {
              "format": "date-time",
              "type": "string"
            },
            "created_at": {
              "format": "date-time",
              "type": "string"
            },
            "accessToken": {
              "$ref": "#/components/schemas/AccessTokenEntity"
            }
          },
          "required": [
            "id",
            "value",
            "expired_at",
            "created_at",
            "accessToken"
          ]
        },
        "UserEntity": {
          "type": "object",
          "properties": {
            "username": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "psalt": {
              "type": "string"
            },
            "nickname": {
              "type": "string"
            },
            "avatar": {
              "type": "string"
            },
            "qq": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            },
            "remark": {
              "type": "string"
            },
            "status": {
              "type": "number"
            },
            "roles": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RoleEntity"
              }
            },
            "dept": {
              "$ref": "#/components/schemas/DeptEntity"
            },
            "accessTokens": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AccessTokenEntity"
              }
            },
            "id": {
              "type": "number"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "username",
            "password",
            "psalt",
            "nickname",
            "avatar",
            "qq",
            "email",
            "phone",
            "remark",
            "status",
            "roles",
            "dept",
            "accessTokens",
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "AccessTokenEntity": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "expired_at": {
              "format": "date-time",
              "type": "string"
            },
            "created_at": {
              "format": "date-time",
              "type": "string"
            },
            "refreshToken": {
              "$ref": "#/components/schemas/RefreshTokenEntity"
            },
            "user": {
              "$ref": "#/components/schemas/UserEntity"
            }
          },
          "required": [
            "id",
            "value",
            "expired_at",
            "created_at",
            "refreshToken",
            "user"
          ]
        },
        "UserDto": {
          "type": "object",
          "properties": {
            "avatar": {
              "type": "string",
              "description": "头像"
            },
            "username": {
              "type": "string",
              "minLength": 4,
              "maxLength": 20,
              "pattern": "/^[\\s\\S]+$/",
              "description": "登录账号",
              "example": "admin"
            },
            "password": {
              "type": "string",
              "pattern": "/^\\S*(?=\\S{6})(?=\\S*\\d)(?=\\S*[A-Z])\\S*$/i",
              "description": "登录密码",
              "example": "a123456"
            },
            "roleIds": {
              "description": "归属角色",
              "type": "array",
              "items": {
                "type": "number"
              }
            },
            "deptId": {
              "type": "number",
              "description": "归属大区"
            },
            "nickname": {
              "type": "string",
              "description": "呢称",
              "example": "admin"
            },
            "email": {
              "type": "string",
              "description": "邮箱",
              "example": "bqy.dev@qq.com"
            },
            "phone": {
              "type": "string",
              "description": "手机号"
            },
            "qq": {
              "type": "string",
              "minLength": 5,
              "maxLength": 11,
              "pattern": "/^[1-9]\\d{4,10}$/",
              "description": "QQ"
            },
            "remark": {
              "type": "string",
              "description": "备注"
            },
            "status": {
              "type": "number",
              "enum": [
                0,
                1
              ],
              "description": "状态"
            }
          },
          "required": [
            "username",
            "password",
            "roleIds",
            "nickname",
            "email",
            "status"
          ]
        },
        "UserUpdateDto": {
          "type": "object",
          "properties": {
            "avatar": {
              "type": "string",
              "description": "头像"
            },
            "username": {
              "type": "string",
              "minLength": 4,
              "maxLength": 20,
              "pattern": "/^[\\s\\S]+$/",
              "description": "登录账号",
              "example": "admin"
            },
            "password": {
              "type": "string",
              "pattern": "/^\\S*(?=\\S{6})(?=\\S*\\d)(?=\\S*[A-Z])\\S*$/i",
              "description": "登录密码",
              "example": "a123456"
            },
            "roleIds": {
              "description": "归属角色",
              "type": "array",
              "items": {
                "type": "number"
              }
            },
            "deptId": {
              "type": "number",
              "description": "归属大区"
            },
            "nickname": {
              "type": "string",
              "description": "呢称",
              "example": "admin"
            },
            "email": {
              "type": "string",
              "description": "邮箱",
              "example": "bqy.dev@qq.com"
            },
            "phone": {
              "type": "string",
              "description": "手机号"
            },
            "qq": {
              "type": "string",
              "minLength": 5,
              "maxLength": 11,
              "pattern": "/^[1-9]\\d{4,10}$/",
              "description": "QQ"
            },
            "remark": {
              "type": "string",
              "description": "备注"
            },
            "status": {
              "type": "number",
              "enum": [
                0,
                1
              ],
              "description": "状态"
            }
          }
        },
        "UserPasswordDto": {
          "type": "object",
          "properties": {
            "password": {
              "type": "string",
              "pattern": "/^\\S*(?=\\S{6})(?=\\S*\\d)(?=\\S*[A-Z])\\S*$/i",
              "description": "更改后的密码"
            }
          },
          "required": [
            "password"
          ]
        },
        "RoleInfo": {
          "type": "object",
          "properties": {
            "creator": {
              "type": "string",
              "description": "创建者"
            },
            "updater": {
              "type": "string",
              "description": "更新者"
            },
            "name": {
              "type": "string",
              "description": "角色名"
            },
            "value": {
              "type": "string",
              "description": "角色标识"
            },
            "remark": {
              "type": "string",
              "description": "角色描述"
            },
            "status": {
              "type": "number",
              "description": "状态：1启用，0禁用"
            },
            "default": {
              "type": "boolean",
              "description": "是否默认用户"
            },
            "menuIds": {
              "type": "array",
              "items": {
                "type": "number"
              }
            },
            "id": {
              "type": "number"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "creator",
            "updater",
            "name",
            "value",
            "remark",
            "status",
            "default",
            "menuIds",
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "RoleDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "minLength": 2,
              "description": "角色名称"
            },
            "value": {
              "type": "string",
              "minLength": 2,
              "pattern": "/^[a-z0-9]+$/i",
              "description": "角色标识"
            },
            "remark": {
              "type": "string",
              "description": "角色备注"
            },
            "status": {
              "type": "number",
              "enum": [
                0,
                1
              ],
              "description": "状态"
            },
            "menuIds": {
              "description": "关联菜单、权限编号",
              "type": "array",
              "items": {
                "type": "number"
              }
            }
          },
          "required": [
            "name",
            "value",
            "status"
          ]
        },
        "RoleUpdateDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "minLength": 2,
              "description": "角色名称"
            },
            "value": {
              "type": "string",
              "minLength": 2,
              "pattern": "/^[a-z0-9]+$/i",
              "description": "角色标识"
            },
            "remark": {
              "type": "string",
              "description": "角色备注"
            },
            "status": {
              "type": "number",
              "enum": [
                0,
                1
              ],
              "description": "状态"
            },
            "menuIds": {
              "description": "关联菜单、权限编号",
              "type": "array",
              "items": {
                "type": "number"
              }
            }
          }
        },
        "MenuItemInfo": {
          "type": "object",
          "properties": {
            "creator": {
              "type": "string",
              "description": "创建者"
            },
            "updater": {
              "type": "string",
              "description": "更新者"
            },
            "children": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/MenuItemInfo"
              }
            },
            "parentId": {
              "type": "number"
            },
            "name": {
              "type": "string"
            },
            "path": {
              "type": "string"
            },
            "permission": {
              "type": "string"
            },
            "type": {
              "type": "number"
            },
            "icon": {
              "type": "string"
            },
            "orderNo": {
              "type": "number"
            },
            "component": {
              "type": "string"
            },
            "isExt": {
              "type": "boolean"
            },
            "extOpenMode": {
              "type": "number"
            },
            "keepAlive": {
              "type": "number"
            },
            "show": {
              "type": "number"
            },
            "activeMenu": {
              "type": "string"
            },
            "status": {
              "type": "number"
            },
            "roles": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RoleEntity"
              }
            },
            "id": {
              "type": "number"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "creator",
            "updater",
            "children",
            "parentId",
            "name",
            "path",
            "permission",
            "type",
            "icon",
            "orderNo",
            "component",
            "isExt",
            "extOpenMode",
            "keepAlive",
            "show",
            "activeMenu",
            "status",
            "roles",
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "MenuDto": {
          "type": "object",
          "properties": {
            "type": {
              "enum": [
                0,
                1,
                2
              ],
              "type": "number",
              "description": "\n菜单类型:\n- 0: 菜单\n- 1: 目录\n- 2: 权限   \n    "
            },
            "parentId": {
              "type": "number",
              "description": "父级菜单"
            },
            "name": {
              "type": "string",
              "minLength": 2,
              "description": "菜单或权限名称"
            },
            "orderNo": {
              "type": "number",
              "minimum": 0,
              "description": "排序"
            },
            "path": {
              "type": "string",
              "description": "前端路由地址"
            },
            "isExt": {
              "type": "boolean",
              "description": "是否外链",
              "default": false
            },
            "extOpenMode": {
              "type": "number",
              "enum": [
                1,
                2
              ],
              "description": "外链打开方式",
              "default": 1
            },
            "show": {
              "type": "number",
              "enum": [
                0,
                1
              ],
              "description": "菜单是否显示",
              "default": 1
            },
            "activeMenu": {
              "type": "string",
              "description": "设置当前路由高亮的菜单项，一般用于详情页"
            },
            "keepAlive": {
              "type": "number",
              "enum": [
                0,
                1
              ],
              "description": "是否开启页面缓存",
              "default": 1
            },
            "status": {
              "type": "number",
              "enum": [
                0,
                1
              ],
              "description": "状态",
              "default": 1
            },
            "icon": {
              "type": "string",
              "description": "菜单图标"
            },
            "permission": {
              "type": "string",
              "description": "对应权限"
            },
            "component": {
              "type": "string",
              "description": "菜单路由路径或外链"
            }
          },
          "required": [
            "type",
            "parentId",
            "name",
            "orderNo",
            "path",
            "isExt",
            "extOpenMode",
            "show",
            "keepAlive",
            "status",
            "permission"
          ]
        },
        "MenuUpdateDto": {
          "type": "object",
          "properties": {
            "type": {
              "enum": [
                0,
                1,
                2
              ],
              "type": "number",
              "description": "\n菜单类型:\n- 0: 菜单\n- 1: 目录\n- 2: 权限   \n    "
            },
            "parentId": {
              "type": "number",
              "description": "父级菜单"
            },
            "name": {
              "type": "string",
              "minLength": 2,
              "description": "菜单或权限名称"
            },
            "orderNo": {
              "type": "number",
              "minimum": 0,
              "description": "排序"
            },
            "path": {
              "type": "string",
              "description": "前端路由地址"
            },
            "isExt": {
              "type": "boolean",
              "description": "是否外链",
              "default": false
            },
            "extOpenMode": {
              "type": "number",
              "enum": [
                1,
                2
              ],
              "description": "外链打开方式",
              "default": 1
            },
            "show": {
              "type": "number",
              "enum": [
                0,
                1
              ],
              "description": "菜单是否显示",
              "default": 1
            },
            "activeMenu": {
              "type": "string",
              "description": "设置当前路由高亮的菜单项，一般用于详情页"
            },
            "keepAlive": {
              "type": "number",
              "enum": [
                0,
                1
              ],
              "description": "是否开启页面缓存",
              "default": 1
            },
            "status": {
              "type": "number",
              "enum": [
                0,
                1
              ],
              "description": "状态",
              "default": 1
            },
            "icon": {
              "type": "string",
              "description": "菜单图标"
            },
            "permission": {
              "type": "string",
              "description": "对应权限"
            },
            "component": {
              "type": "string",
              "description": "菜单路由路径或外链"
            }
          }
        },
        "ParamConfigEntity": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "配置名"
            },
            "key": {
              "type": "string",
              "description": "配置键名"
            },
            "value": {
              "type": "string",
              "description": "配置值"
            },
            "remark": {
              "type": "string",
              "description": "配置描述"
            },
            "id": {
              "type": "number"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "name",
            "key",
            "value",
            "remark",
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "ParamConfigDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "参数名称"
            },
            "key": {
              "type": "string",
              "minLength": 3,
              "description": "参数键名"
            },
            "value": {
              "type": "string",
              "description": "参数值"
            },
            "remark": {
              "type": "string",
              "description": "备注"
            }
          },
          "required": [
            "name",
            "key",
            "value"
          ]
        },
        "LoginLogInfo": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "日志编号"
            },
            "ip": {
              "type": "string",
              "description": "登录ip",
              "example": "1.1.1.1"
            },
            "address": {
              "type": "string",
              "description": "登录地址"
            },
            "os": {
              "type": "string",
              "description": "系统",
              "example": "Windows 10"
            },
            "browser": {
              "type": "string",
              "description": "浏览器",
              "example": "Chrome"
            },
            "username": {
              "type": "string",
              "description": "登录用户名",
              "example": "admin"
            },
            "time": {
              "type": "string",
              "description": "登录时间",
              "example": "2023-12-22 16:46:20.333843"
            }
          },
          "required": [
            "id",
            "ip",
            "address",
            "os",
            "browser",
            "username",
            "time"
          ]
        },
        "CaptchaLogEntity": {
          "type": "object",
          "properties": {
            "userId": {
              "type": "number",
              "description": "用户ID"
            },
            "account": {
              "type": "string",
              "description": "账号"
            },
            "code": {
              "type": "string",
              "description": "验证码"
            },
            "provider": {
              "type": "object",
              "description": "验证码提供方"
            },
            "id": {
              "type": "number"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "userId",
            "account",
            "code",
            "provider",
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "DeptDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "minLength": 1,
              "description": "部门名称"
            },
            "parentId": {
              "type": "number",
              "description": "父级部门id"
            },
            "orderNo": {
              "type": "number",
              "minimum": 0,
              "description": "排序编号"
            }
          },
          "required": [
            "name",
            "parentId"
          ]
        },
        "StorageInfo": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "文件ID"
            },
            "name": {
              "type": "string",
              "description": "文件名"
            },
            "extName": {
              "type": "string",
              "description": "文件扩展名"
            },
            "path": {
              "type": "string",
              "description": "文件路径"
            },
            "type": {
              "type": "string",
              "description": "文件类型"
            },
            "size": {
              "type": "string",
              "description": "大小"
            },
            "createdAt": {
              "type": "string",
              "description": "上传时间"
            },
            "username": {
              "type": "string",
              "description": "上传者"
            }
          },
          "required": [
            "id",
            "name",
            "extName",
            "path",
            "type",
            "size",
            "createdAt",
            "username"
          ]
        },
        "StorageDeleteDto": {
          "type": "object",
          "properties": {
            "ids": {
              "description": "需要删除的文件ID列表",
              "type": "array",
              "items": {
                "type": "number"
              }
            }
          },
          "required": [
            "ids"
          ]
        },
        "EmailSendDto": {
          "type": "object",
          "properties": {
            "to": {
              "type": "string",
              "description": "收件人邮箱"
            },
            "subject": {
              "type": "string",
              "description": "标题"
            },
            "content": {
              "type": "string",
              "description": "正文"
            }
          },
          "required": [
            "to",
            "subject",
            "content"
          ]
        },
        "FileUploadDto": {
          "type": "object",
          "properties": {
            "file": {
              "type": "string",
              "format": "binary",
              "description": "文件"
            }
          },
          "required": [
            "file"
          ]
        },
        "TodoEntity": {
          "type": "object",
          "properties": {
            "value": {
              "type": "string",
              "description": "todo"
            },
            "status": {
              "type": "boolean",
              "description": "todo"
            },
            "user": {
              "$ref": "#/components/schemas/UserEntity"
            },
            "id": {
              "type": "number"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "value",
            "status",
            "user",
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "TodoDto": {
          "type": "object",
          "properties": {
            "value": {
              "type": "string",
              "description": "名称"
            }
          },
          "required": [
            "value"
          ]
        },
        "TodoUpdateDto": {
          "type": "object",
          "properties": {
            "value": {
              "type": "string",
              "description": "名称"
            }
          }
        },
        "CommonEntity": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "ResOp": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object"
            },
            "code": {
              "type": "number",
              "default": 200
            },
            "message": {
              "type": "string",
              "default": "success"
            }
          },
          "required": [
            "data",
            "code",
            "message"
          ]
        },
        "Pagination": {
          "type": "object",
          "properties": {}
        },
        "TreeResult": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number"
            },
            "parentId": {
              "type": "number"
            },
            "children": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "id",
            "parentId",
            "children"
          ]
        }
      }
    }
  },
  "customOptions": {
    "persistAuthorization": true
  }
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
