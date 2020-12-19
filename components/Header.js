import { useContext } from 'react';
import { Divider, PageHeader } from 'antd';
import { css } from '@emotion/css';
import AuthContext from '@/contexts/AuthContext';
import CurrentUser from './CurrentUser';

export default function Header() {
  const { user } = useContext(AuthContext);
  const headerExtra = user ? <CurrentUser user={user} /> : null;

  return (
    <>
      <PageHeader title="WebAuthn API" backIcon={false} extra={headerExtra} className={headerClass} />
      <Divider className={dividerClass} />
    </>
  );
}

const headerClass = css`
  padding-left: 0;
  padding-right: 0;
`;

const dividerClass = css`
  margin-top: 0;
`;
