---
title: 关于 Spring Boot
createTime: 2025/02/27 12:56:52
permalink: /spring-boot/
---

Spring Boot 可以创建独立的、生产级的 Spring 应用程序 其对 Spring 平台和第三方库持开放的态度，因此可以轻松上手 大多数 Spring Boot 应用
程序只需很少的 Spring 配置

<LinkCard icon="simple-icons:springboot" title="Spring Boot 官网" href="https://docs.spring.io/spring-boot/index.html"></LinkCard>

我们可以使用 Spring Boot 创建 Java 应用程序，这些应用程序可以通过 java -jar 或更传统的 war 部署启动。其包括下面优点:

- 为所有 Spring 开发项目提供更快、更广泛的入门体验
- 开始时有主见，但当需求开始偏离默认值时，可迅速摆脱困境（自动装配）
- 提供一系列大型项目常用的非功能性功能（如嵌入式服务器、安全性、度量、健康检查和外部化配置）
- 完全无需生成代码（当不针对本地图像时），也无需 XML 配置

<LinkCard icon="noto:open-book" title="官方教程" href="https://spring.io/guides"></LinkCard>

## 系统要求

Spring Boot 3.4.3 至少需要 Java 17，并兼容 Java 23 及以下版本。 还需要 Spring Framework 6.2.3 或更高版本。 为以 下构建工具提供了
明确的构建支持:

| Build Tool | Version                                           |
|:-----------|:--------------------------------------------------|
| Maven      | 3.6.3 or later                                    |
| Gradle     | Gradle 7.x (7.6.4 or later) or 8.x (8.4 or later) |

### Servlet Containers

Spring Boot 支持以下嵌入式 servlet 容器：

| Name                           | Servlet Version |
|:-------------------------------|:----------------|
| Tomcat 10.1 (10.1.25 or later) | 6.0             |
| Jetty 12.0                     | 6.0             |
| Undertow 2.3                   | 6.0             |

还可以将 Spring Boot 应用程序部署到任何兼容 servlet 5.0+ 的容器中

### GraalVM Native Images  GraalVM

Spring 可使用 GraalVM 22.3 或更高版本将启动应用程序转换为本地映像可以使用原生构建工具 Gradle/Maven 插件或 GraalVM 提供的 native-image
工具创建图像。还可以使用 native-image Paketo buildpack 创建原生镜像。 支持以下版本

| Name               | Version |
|:-------------------|:--------|
| GraalVM Community  | 22.3    |
| Native Build Tools | 0.10.5  |

## GitHub repo

<CardGrid>
  <RepoCard repo="spring-projects/spring-framework"></RepoCard>
  <RepoCard repo="spring-projects/spring-boot"></RepoCard>
</CardGrid>
