import React from "react";
import OverviewItem from "./OverviewItem";

interface OverviewProps {
  data: {
    websiteStats: {
      pageviews: {
        value: number;
      };
      visitors: {
        value: number;
      };
      visits: {
        value: number;
      };
      countries: {
        value: number;
      };
      events: {
        value: number;
      };
    };
  };
}

const Overview = ({ data }: OverviewProps) => {
  const pageViewsData = data?.websiteStats.pageviews.value || 0;
  const visitorsData = data?.websiteStats.visitors.value || 0;
  const visitsData = data?.websiteStats.visits.value || 0;
  const countriesData = data?.websiteStats.countries.value || 0;
  const eventsData = data?.websiteStats.events.value || 0;

  return (
    <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-5">
      <OverviewItem label="Page Views" value={pageViewsData} />
      <OverviewItem label="Visitors" value={visitorsData} />
      <OverviewItem label="Visits" value={visitsData} />
      <OverviewItem label="Countries" value={countriesData} />
      <OverviewItem label="Events" value={eventsData} />
    </div>
  );
};

export default Overview;
