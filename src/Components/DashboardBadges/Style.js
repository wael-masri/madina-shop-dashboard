import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 60px;

  min-height: 70vh;
`;

export const WrapperCounter = styled.div`
  width: 100%;
  display: ${({ action }) => (action ? "flex" : "none")};
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  margin-bottom: 60px;
`;
export const CounterItem = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.BOXSHADOW};
`;
export const WrapperBadges = styled.div`
  width: 100%;
  display: ${({ action1, action2, action3, exactly }) =>
    exactly === "thisone"
      ? action1
        ? "flex"
        : action2
        ? "flex"
        : action3
        ? "flex"
        : "none"
      : "flex"};
  gap: 15px;
  margin-bottom: 60px;
`;
export const BadgesBar = styled.div`
  flex: 2;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  box-shadow: ${({ theme }) => theme.BOXSHADOW};
  border-radius: 15px;
  display: ${({ action }) => (action ? "block" : "none")};
`;
export const WrapperBadgeMini = styled.div`
  flex: 1;
  min-height: 415px;
  display: ${({ action1, action2 }) => (action1 ? "" : action2 ? "" : "none")};
  gap: ${({ action }) => (action ? "" : "10px")};
`;
export const BadgesMiniBar = styled.div`
  flex: 1;
  border-radius: 15px;
  min-height: 200px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  box-shadow: ${({ theme }) => theme.BOXSHADOW};
  display: ${({ action }) => (action ? "block" : "none")};
`;

export const RecentOrders = styled.div`
  flex: 1;
  min-height: 450px;
  display: ${({ action }) => (action ? "block" : "none")};

  background-color: ${({ theme }) => theme.BACKGROUND2};
  box-shadow: ${({ theme }) => theme.BOXSHADOW};
  border-radius: 15px;
`;
export const BadgeLine = styled.div`
  flex: 2;
  height: 450px;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.BOXSHADOW};
  display: ${({ action }) => (action ? "block" : "none")};
`;
export const BadgesMiniPie = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  box-shadow: ${({ theme }) => theme.BOXSHADOW};
  border-radius: 15px;
  display: ${({ action }) => (action ? "block" : "none")};
  min-height: 200px;
`;

export const TitleBadges = styled.div`
  padding: 15px 5px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.TEXTCOLOR2};
`;
export const BadgesFull = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.BOXSHADOW};
  min-height: 450px;
  overflow: hidden;
  display: ${({ action }) => (action ? "block" : "none")};
`;

export const EmptyBadges = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 66px;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${({ theme }) => theme.TEXTCOLOR2};
`;
