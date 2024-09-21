import React from "react";
import ActivityHeader from "../components/Header/ActivityHeader";
import ActivityCard from "../components/activitypagecomponents/ActivityCard";

export default function Activities() {
  return (
    <div class="single-page-area">
      <ActivityHeader />
      <div class="mybet-page-wrap">
        <div class="container mt-4">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item col-6" role="presentation">
              <button
                class="nav-link active"
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
            <li class="nav-item col-6" role="presentation">
              <button
                class="nav-link"
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
          <div class="tab-content" id="myTabContent">
            {/* <!-- Content for Today tab --> */}

            <div
              class="tab-pane fade show active"
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
              class="tab-pane fade"
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
