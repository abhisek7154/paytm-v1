import { Appbar } from '../components/appbar';
import { Balance } from '../components/balance';
import { Users } from '../components/users';

export const DashBoard = () => {
  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={"10,000"} />
        <Users />
      </div>
    </div>
  );
};
