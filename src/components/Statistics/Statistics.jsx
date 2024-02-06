// import PieChartDonationas from "../../../../../Donation-campaing/donation-campaign/src/components/PieChartDonationas/PieChartDonationas";
import { getStoredDonationIds } from "../../../../../Donation-campaing/donation-campaign/src/Utility/LocalStorage";
// import React, { PureComponent } from 'react';
import Trial from "../../../../../Donation-campaing/donation-campaign/src/components/Trial/Trial";
// import PieChart from "../../../../../Donation-campaing/donation-campaign/src/components/PieChart/PieChart";
const Statistics = () => {
    const storedData = getStoredDonationIds();
    const data = (storedData.length * 100) / 12;
    return (
        <div >
            <div className="flex justify-center">
                <Trial  data={data}></Trial>
            </div>

        </div>
    );
};

export default Statistics;