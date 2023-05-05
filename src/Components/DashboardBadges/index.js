import React from "react";
import {useSelector} from "react-redux";
import {
  BarChartsDashboard,
  CardCounterDashboard,
  LineCharts,
  PieChartsDashboard,
  TableCustomerDash,
  LatestTransactionDash,
  CirculProg,
} from "../../SubComponents";
import {
  Container,
  WrapperCounter,
  CounterItem,
  WrapperBadges,
  WrapperBadgeMini,
  BadgesBar,
  BadgesMiniBar,
  BadgesMiniPie,
  RecentOrders,
  BadgeLine,
  TitleBadges,
  BadgesFull,
  EmptyBadges,
} from "./Style";
import {
  DataCounter,
  LineChartsData,
  data01,
  data02,
} from "../../Assets/Data";
const DashboardBadges = () => {
  const BadgesStatus = useSelector(state => state.badges);
  return (
    <Container>
      <WrapperCounter action={BadgesStatus.header? 1 : 0}>
        {DataCounter.map((value, index) => {
          return (
            <CounterItem key={index}>
              <CardCounterDashboard data={value} />
            </CounterItem>
          );
        })}
      </WrapperCounter>
      <WrapperBadges
        action1={BadgesStatus.bar? 1 : 0}
        action2={BadgesStatus.pie? 1 : 0}
        action3={BadgesStatus.progressCircule? 1 : 0}
        exactly="thisone"
      >
        <BadgesBar action={BadgesStatus.bar? 1 : 0}>
          <TitleBadges>Title Bar</TitleBadges>
          <BarChartsDashboard dataBar={LineChartsData} />
       
        </BadgesBar>
        <WrapperBadgeMini action1={BadgesStatus.pie? 1 : 0} action2={BadgesStatus.progressCircule? 1 : 0}>
          <BadgesMiniBar action={BadgesStatus.pie? 1 : 0}>
            <TitleBadges>Title pie</TitleBadges>
            <PieChartsDashboard data01={data01} data02={data02} />
          </BadgesMiniBar>
          <BadgesMiniPie action={BadgesStatus.progressCircule? 1 : 0}>
            <TitleBadges>Title radial</TitleBadges>
           <CirculProg />
          </BadgesMiniPie>
        </WrapperBadgeMini>
      </WrapperBadges>
      <WrapperBadges>
        <RecentOrders action={BadgesStatus.topCustomers? 1 : 0}>
          <TableCustomerDash />
        </RecentOrders>
        <BadgeLine action={BadgesStatus.line? 1 : 0}>
          <TitleBadges>Title Line Charts</TitleBadges>
          <LineCharts LineChartsData={LineChartsData} />
        </BadgeLine>
      </WrapperBadges>
      <WrapperBadges>
        <BadgesFull action={BadgesStatus.transactions? 1 : 0}>
          <TitleBadges>Latest Transactions</TitleBadges>
          <LatestTransactionDash />
        </BadgesFull>
      </WrapperBadges>
      {!BadgesStatus.header &&
        !BadgesStatus.pie &&
        !BadgesStatus.progressCircule &&
        !BadgesStatus.bar &&
        !BadgesStatus.line &&
        !BadgesStatus.topCustomers &&
        !BadgesStatus.transactions && <EmptyBadges>My Dashboard is Empty</EmptyBadges>}
    </Container>
  );
};

export default DashboardBadges;
