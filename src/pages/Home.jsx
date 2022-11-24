import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo'
import '../css/page/home.css'
import { userData } from "../dummyData";
import WidgetSm from '../components/WidgetSm';
import WidgetLg from '../components/WidgetLg';
import ChartBar from '../components/ChartBar';

function Home() {
  return (
    <div className="home">
      <Chart />
      <ChartBar/>
    </div>
  );
}

export default Home;