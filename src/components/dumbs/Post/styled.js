import styled from "styled-components";
import Image from "../Image";
import Row from "../Row";
import Column from "../Column";
import { ReactComponent as DotsSvg } from "../../../assets/dots.svg";
import { ReactComponent as HeartSvg } from "../../../assets/heart.svg";
import { ReactComponent as BalloonSvg } from "../../../assets/balloon.svg";
import { ReactComponent as SendSvg } from "../../../assets/send.svg";
import { ReactComponent as SaveSvg } from "../../../assets/save.svg";

export const Name = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

export const PastTime = styled.time`
  color: #8e8e8e;
  font-size: 10px;
  text-transform: uppercase;
`;

export const Photo = styled(Image)`
  width: 100%;
  direction: center;
`;

export const Picture = styled(Image)`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  margin-right: 14px;
`;

export const SpacedRow = styled(Row)`
  justify-content: space-between;
  width: 100%;
`;
export const FirstRow = styled(SpacedRow)`
  padding: 12px;
`;
export const Container = styled(Column)`
  width: 614px;
  border: 1px solid #dbdbdb;
  margin-bottom: 24px;
`;
export const Heart = styled(HeartSvg)`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

export const Balloon = styled(BalloonSvg)`
  width: 24px;
  height: 24px;
  margin: 8px;
`;
export const Dots = styled(DotsSvg)`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

export const Test = styled.div`
  display: flex;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const Send = styled(SendSvg)`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

export const Save = styled(SaveSvg)`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-left: 4px;
`;

export const Footer = styled.footer`
  padding: 0 16px 16px 16px;
`;
export const Profile = styled(Row)`
  align-items: center;
`;
