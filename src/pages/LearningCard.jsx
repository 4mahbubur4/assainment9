import { useEffect, useState } from "react";
import { Link } from "react-router";

const LearningCard = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/learn.json")
      .then(res => res.json())
      .then(data => setSkills(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="my-14">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(skill => (
            <div key={skill.skillId} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={skill.image}
                  alt={skill.skillName}
                  className="h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">
                  {skill.skillName}
                </h2>

                <p>⭐ Rating: {skill.rating}</p>
                <p>💲 Price: ${skill.price}</p>

                <div className="card-actions justify-end">
                  <Link
                    to={`/skills/${skill.skillId}`}
                    className="btn btn-outline btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== EXTRA SECTION: HOW IT WORKS ===== */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-base-200 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              1. Browse Skills
            </h3>
            <p>
              Explore various skills offered by people in your area.
            </p>
          </div>

          <div className="p-6 bg-base-200 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              2. Book a Session
            </h3>
            <p>
              Choose a skill and book a session easily.
            </p>
          </div>

          <div className="p-6 bg-base-200 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              3. Learn & Rate
            </h3>
            <p>
              Learn the skill and rate your experience.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LearningCard;
