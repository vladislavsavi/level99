import { FC } from "react";
import { Layout, PageHeader } from "antd";
import { Container } from "react-grid-system";

import "./layout.scss";

const { Content, Footer } = Layout;

export const AppLayout: FC = ({ children }) => {
  return (
    <Layout className="layout">
      <PageHeader ghost={false} className="layout__header" title="Test task" />
      <Content className="layout__content">
        <Container>{children}</Container>
      </Content>
    </Layout>
  );
};
