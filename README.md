# Rock Paper Scissors（石头剪刀布）

一个用原生 JavaScript 编写的石头剪刀布小游戏。玩家通过浏览器弹窗输入选择，和电脑进行 5 轮对决，每轮结果和最终胜负都会输出到浏览器控制台。

## 功能

- 电脑随机出拳（石头、剪刀、布的概率各为 1/3）
- 通过 `prompt` 弹窗输入玩家的选择，大小写均可（如 `Rock`、`ROCK`、`rock`）
- 共进行 5 轮，每轮在控制台显示输赢和电脑的选择
- 5 轮结束后统计比分，宣布最终赢家（或平局）

## 如何运行

项目没有任何依赖，也不需要构建。

1. 克隆仓库：
   ```bash
   git clone https://github.com/Kho10-16/rock-paper-scissors.git
   cd rock-paper-scissors
   ```
2. 用浏览器直接打开 `index.html`。
3. 按 `F12`（macOS 上是 `Cmd + Option + I`）打开开发者工具，切换到 **Console（控制台）** 标签页。
4. 在弹出的输入框中输入 `rock`、`paper` 或 `scissors`，共 5 次，然后在控制台查看结果。

> 提示：如果先打开页面再打开控制台，可能看不到前面几轮的输出。可以先打开控制台，再刷新页面重新开始游戏。

## 游戏规则

| 玩家 \ 电脑 | rock（石头） | paper（布） | scissors（剪刀） |
|---|---|---|---|
| **rock（石头）** | 平局 | 输 | 赢 |
| **paper（布）** | 赢 | 平局 | 输 |
| **scissors（剪刀）** | 输 | 赢 | 平局 |

每赢一轮得 1 分，平局不得分。5 轮后分数高的一方获胜，分数相同则为平局。

## 项目结构

```
rock-paper-scissors/
├── index.html   # 页面入口，引入 script.js
└── script.js    # 游戏逻辑
```

`script.js` 中的主要函数：

| 函数 | 作用 |
|---|---|
| `getComputerChoice()` | 用 `Math.random()` 随机返回 `"rock"`、`"paper"` 或 `"scissors"` |
| `getHumanChoice()` | 弹出输入框，返回玩家输入的内容 |
| `playGame()` | 初始化双方比分，进行 5 轮游戏并输出最终结果 |
| `playRound(humanChoice, computerChoice)` | 定义在 `playGame()` 内部，判断单轮胜负并更新比分 |

## 已知限制

- 游戏结果只输出在控制台，页面上没有图形界面。
- 没有校验输入：输入 `rock` 和 `paper` 以外的任何内容都会被当作 `scissors` 处理。
- 如果在弹窗中点击“取消”，`prompt` 会返回 `null`，导致程序报错并中断。

## 使用的技术

- HTML
- JavaScript（ES6）
