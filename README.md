####  `README.md`

```markdown
# COVID19-Visualization-Prediction-App

## 安装步骤

### 克隆仓库

```bash
git clone https://github.com/Viennacacao/COVID19-Visualization-Prediction-App.git
cd COVID19-Visualization-Prediction-App
```

### 设置 Python 虚拟环境

1. 创建虚拟环境
   ```bash
   python3 -m venv venv
   ```

2. 激活虚拟环境

   - 在 macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
   - 在 Windows:
     ```bash
     .\venv\Scripts\activate
     ```

3. 安装 Python 依赖项
   ```bash
   pip install -r requirements.txt
   ```

### 安装 Node.js 依赖项

1. 导航到 `frontend` 目录
   ```bash
   cd frontend
   ```

2. 安装依赖项
   ```bash
   npm install
   ```
   或者使用 Yarn:
   ```bash
   yarn install
   ```

### 运行应用

#### 运行后端

1. 在项目根目录中，激活虚拟环境（如果还没有激活）
   ```bash
   source venv/bin/activate
   ```
2. 运行后端服务器
   ```bash
   flask run
   ```

#### 运行前端

1. 导航到 `frontend` 目录
   ```bash
   cd frontend
   ```

2. 启动前端开发服务器
   ```bash
   npm start
   ```
   或者使用 Yarn:
   ```bash
   yarn start
   ```

## 贡献

欢迎提交问题（issues）和请求（pull requests）。
