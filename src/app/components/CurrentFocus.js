// components/CurrentFocusSection.js
const CurrentFocusSection = () => {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Current Focus</h2>
          <div className="bg-secondary rounded-lg shadow-sm p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground text-xl mb-4">
                  Learning & Growth
                </h3>
                <ul className="space-y-3 text-secondary-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>AWS Cloud Certification (In Progress)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Daily LeetCode Practice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };