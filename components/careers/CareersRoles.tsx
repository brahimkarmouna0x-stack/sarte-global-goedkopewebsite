import { CAREERS_ROLES, CAREERS_ROLES_SECTION } from "@/constants/careers";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function CareersRoles() {
  const hasRoles = CAREERS_ROLES.length > 0;

  return (
    <section className="careers-roles" aria-labelledby="careers-roles-h">
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{CAREERS_ROLES_SECTION.eyebrow}</span>
            <h2 className="h2" id="careers-roles-h">
              {CAREERS_ROLES_SECTION.titleLead}{" "}
              <em>{CAREERS_ROLES_SECTION.titleEm}</em>
            </h2>
          </div>
          <p className="sub">{CAREERS_ROLES_SECTION.sub}</p>
        </Reveal>

        {hasRoles ? (
          <div className="careers-roles__list">
            {CAREERS_ROLES.map((role, index) => {
              const applyHref = `mailto:${role.applyEmail}?subject=${encodeURIComponent(
                `Sollicitatie — ${role.title}`,
              )}`;
              return (
                <Reveal
                  key={role.id}
                  as="article"
                  className="careers-role"
                  index={index}
                >
                  <div className="careers-role__head">
                    <h3 className="careers-role__title">{role.title}</h3>
                    <div className="careers-role__meta">
                      <span className="careers-role__tag">{role.team}</span>
                      <span className="careers-role__tag">{role.location}</span>
                      <span className="careers-role__tag">{role.type}</span>
                    </div>
                  </div>
                  <p className="careers-role__sum">{role.summary}</p>
                  <a href={applyHref} className="careers-role__apply">
                    Solliciteer op deze rol <span className="arr">→</span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        ) : (
          <Reveal as="article" className="careers-roles__empty">
            <p>{CAREERS_ROLES_SECTION.emptyState}</p>
            <a
              href={`mailto:${CAREERS_ROLES_SECTION.generalApplyEmail}?subject=Open%20sollicitatie`}
              className="btn btn-ghost"
            >
              Mail ons toch <span className="arr">→</span>
            </a>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
