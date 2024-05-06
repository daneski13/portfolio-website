---
title: Hotel Bookings Analysis
date: '2024-05-02'
# updated: '2024-04-29'
card: /projects/hotel-bookings-analysis/card.webp
cover: /projects/hotel-bookings-analysis/cover.webp
description: 'Hotel Bookings Analysis - MIS 420 Final Project'
proj_url: https://public.tableau.com/views/HotelBookingsEDA-MIS420FinalProject/HotelBookings?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link
tag: Data Analysis
---

<script>
    import Anchor from '$lib/components/markdown/Anchor.svelte';
    import Tableau from '$lib/components/markdown/Tableau.svelte';
</script>

**Technologies:**

![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)
![Tableau](https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=Tableau&logoColor=white)

---

This project analyzed booking data from two hotels - a city hotel and a resort - to gain insights into booking behaviors and offer potential business recommendations. This was my final project and presentation for the MIS 420 (Business Intelligence) course at Washington State University. The dataset used can be found <Anchor href="https://www.kaggle.com/jessemostipak/hotel-booking-demand" rel="external">here</Anchor>.

This dataset was uploaded to Microsoft SQL Server, and I wrote an SQL stored procedure to prepare the data for analysis, which included adding several new columns for additional metrics. Data was extracted into Tableau via the stored procedure and a few additional aggregate metrics were created. Data was then analyzed via a Tableau Data Story.

<Tableau url="https://public.tableau.com/views/HotelBookingsEDA-MIS420FinalProject/HotelBookings"/>

## Questions

1. How are bookings distributed between the two hotels (city hotel vs resort)?
2. Where do the guests come from (by country/region)?
3. How are bookings affected throughout the year (seasonality patterns)? Does this change when comparing the city hotel vs the resort?
4. Have cancellations remained consistent over time (i.e. abnormal increases in cancellations)?
5. How do seasons impact cancellation rates?
6. Are guests from some countries more likely to cancel their bookings?
7. What factors affect cancellation behavior?
   - Previous cancellations by the guest?
   - Previous stays by the guest at the hotel?
   - Number of special requests?
   - Length of stay?
   - Number of guests in the booking?
   - Lead time between booking and arrival date?
   - Having children?

## Insights

The city hotel had significantly more bookings than the resort. Guests came from all over the world, but primarily from Portugal, UK, France, Spain, and Germany.

Seasonality played a major role, with summer months like July and August seeing peak demand, resulting in higher prices, longer lead times for bookings, and longer guest stays. This seasonality effect was more pronounced for the resort hotel. Analysis revealed an opportunity to raise rates at the resort in September as bookings followed similar behaviors to June yet the price charged per night was lower.

Distinct patterns materialized between the two hotel types. The city hotel exhibited a spike demand during December relative to the other winter months, likely from guests seeking to spend time with family over the holidays. The resort hotel had the longest average lead times in June and September, guests are likely capitalizing on the lower rates and relatively good weather in early and late summer. June also had the longest average length of stay for the resort hotel.

Guests from the Middle East and parts of Eastern Asia were more likely to cancel their bookings while guests from the Americas and most of Europe were less likely to cancel.

Guests with more previous cancellations were more likely to cancel their bookings, while guests with more previous stays were less likely to cancel. Bookings with more special requests were less likely to cancel on average. Bookings with longer stays were slightly more likely to cancel on average, as well as those with more guests. Longer lead times were also more likely to cancel on average, likely due to vacation plans changing.

The resort hotel had an approximately 10% lower cancellation rate than the city hotel overall, however, having children in the booking was associated with about a 50% cancellation rate regardless of the type of hotel. Grouped bookings were the least likely to cancel overall.

## Recommendations

1. **Pricing Strategy:** The resort hotel should consider slightly raising rates in September, as demand patterns are similar to June yet the price per night in September is lower.
2. **Marketing Strategy:** Both hotels should consider targeting group bookings with discounts or special offers, as group bookings were the least likely to cancel.
3. **Predictive Modeling:** Develop a predictive model to preemptively identify bookings at risk of cancellation, allowing for targeted marketing or other interventions to prevent cancellations.
   - Offering complementary services to guests likely to cancel could help retention (e.g. free dinner, spa service, etc.).
