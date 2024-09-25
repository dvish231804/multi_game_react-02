import React from "react";
import ActivityHeader from "../components/Header/ActivityHeader";
import ActivityCard from "../components/activitypagecomponents/ActivityCard";

export default function Activities() {
  return (
    <div className="single-page-area">
      <ActivityHeader />
      <div className="mybet-page-wrap">
        <div className="container mt-4">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item col-6" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Today
              </button>
            </li>
            <li className="nav-item col-6" role="presentation">
              <button
                className="nav-link"
                id="lose-tab"
                data-bs-toggle="tab"
                data-bs-target="#lose"
                type="button"
                role="tab"
                aria-controls="lose"
                aria-selected="false"
              >
                Previous Activity{" "}
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            {/* <!-- Content for Today tab --> */}

            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
            </div>

            {/* <!-- Content for prvious tab --> */}

            <div
              className="tab-pane fade"
              id="lose"
              role="tabpanel"
              aria-labelledby="lose-tab"
            >
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
