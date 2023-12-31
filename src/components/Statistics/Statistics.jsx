import React from 'react';

const Statistics = ({ data }) => {
  return (
    <section className="statistics">
      <ul className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;