export default function SmathFigure({ weekNumber }: { weekNumber: number }) {
  if (weekNumber === 44) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📐 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagram 1: Vertically opposite angles */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              <line x1="20" y1="180" x2="180" y2="20" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="20" y1="20" x2="180" y2="180" stroke="#1a1a1a" strokeWidth="2" />
              <circle cx="100" cy="100" r="3" fill="#1a1a1a" />
              <text x="100" y="95" fontSize="12" fill="#1a1a1a" textAnchor="middle" fontWeight="600">O</text>
              <text x="60" y="60" fontSize="16" fill="#d97706" fontWeight="700">50°</text>
              <text x="130" y="140" fontSize="16" fill="#d97706" fontWeight="700">50°</text>
              <text x="60" y="140" fontSize="14" fill="#6b7280">130°</text>
              <text x="130" y="60" fontSize="14" fill="#6b7280">130°</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              对顶角相等
            </p>
          </div>

          {/* Diagram 2: Angles on a straight line */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              <line x1="10" y1="100" x2="190" y2="100" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="100" y1="100" x2="140" y2="40" stroke="#1a1a1a" strokeWidth="2" />
              <text x="10" y="95" fontSize="12" fill="#1a1a1a" fontWeight="600">A</text>
              <text x="185" y="95" fontSize="12" fill="#1a1a1a" fontWeight="600">B</text>
              <text x="145" y="35" fontSize="12" fill="#1a1a1a" fontWeight="600">C</text>
              <text x="100" y="95" fontSize="10" fill="#1a1a1a" textAnchor="middle" fontWeight="600">O</text>
              <path d="M 110 100 A 10 10 0 0 1 112 95" fill="none" stroke="#d97706" strokeWidth="1.5" />
              <text x="120" y="80" fontSize="16" fill="#d97706" fontWeight="700">130°</text>
              <path d="M 90 100 A 10 10 0 0 0 88 95" fill="none" stroke="#10b981" strokeWidth="1.5" />
              <text x="55" y="115" fontSize="16" fill="#10b981" fontWeight="700">50°</text>
              <text x="100" y="130" fontSize="12" fill="#6b7280" textAnchor="middle">130° + 50° = 180°</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              平角 = 180°
            </p>
          </div>

          {/* Diagram 3: Angles at a point */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              <line x1="100" y1="100" x2="100" y2="20" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="100" y1="100" x2="180" y2="100" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="100" y1="100" x2="100" y2="180" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="100" y1="100" x2="20" y2="100" stroke="#1a1a1a" strokeWidth="2" />
              <circle cx="100" cy="100" r="3" fill="#1a1a1a" />
              <text x="100" y="115" fontSize="10" fill="#1a1a1a" textAnchor="middle" fontWeight="600">O</text>
              <text x="80" y="50" fontSize="16" fill="#d97706" fontWeight="700">80°</text>
              <text x="130" y="80" fontSize="16" fill="#10b981" fontWeight="700">100°</text>
              <text x="130" y="130" fontSize="16" fill="#3b82f6" fontWeight="700">90°</text>
              <text x="55" y="130" fontSize="16" fill="#8b5cf6" fontWeight="700">90°</text>
              <text x="100" y="165" fontSize="11" fill="#6b7280" textAnchor="middle">80° + 100° + 90° + 90° = 360°</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              周角 = 360°
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 70) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Diagram 1: x ≤ 4 */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 300 100" className="w-full max-w-[300px] h-auto">
              <defs>
                <marker id="arrowleft" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                  <polygon points="10,5 0,0 0,10" fill="#1a1a1a" />
                </marker>
              </defs>
              <line x1="20" y1="50" x2="280" y2="50" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="20" y1="45" x2="20" y2="55" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="80" y1="45" x2="80" y2="55" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="140" y1="45" x2="140" y2="55" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="200" y1="45" x2="200" y2="55" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="260" y1="45" x2="260" y2="55" stroke="#1a1a1a" strokeWidth="2" />
              <text x="20" y="75" fontSize="14" fill="#1a1a1a" textAnchor="middle">0</text>
              <text x="80" y="75" fontSize="14" fill="#1a1a1a" textAnchor="middle">2</text>
              <text x="140" y="75" fontSize="14" fill="#1a1a1a" textAnchor="middle">4</text>
              <text x="200" y="75" fontSize="14" fill="#1a1a1a" textAnchor="middle">6</text>
              <text x="260" y="75" fontSize="14" fill="#1a1a1a" textAnchor="middle">8</text>
              <circle cx="140" cy="50" r="5" fill="#d97706" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="20" y1="50" x2="140" y2="50" stroke="#d97706" strokeWidth="4" markerStart="url(#arrowleft)" />
            </svg>
            <p className="text-sm text-ink-2 text-center mt-3">
              <span className="font-semibold text-lg">x ≤ 4</span><br />
              <span className="text-accent font-semibold">实心圆点：包含 4</span>
            </p>
          </div>

          {/* Diagram 2: x < 4 */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 300 100" className="w-full max-w-[300px] h-auto">
              <defs>
                <marker id="arrowleft2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                  <polygon points="10,5 0,0 0,10" fill="#1a1a1a" />
                </marker>
              </defs>
              <line x1="20" y1="50" x2="280" y2="50" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="20" y1="45" x2="20" y2="55" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="80" y1="45" x2="80" y2="55" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="140" y1="45" x2="140" y2="55" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="200" y1="45" x2="200" y2="55" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="260" y1="45" x2="260" y2="55" stroke="#1a1a1a" strokeWidth="2" />
              <text x="20" y="75" fontSize="14" fill="#1a1a1a" textAnchor="middle">0</text>
              <text x="80" y="75" fontSize="14" fill="#1a1a1a" textAnchor="middle">2</text>
              <text x="140" y="75" fontSize="14" fill="#1a1a1a" textAnchor="middle">4</text>
              <text x="200" y="75" fontSize="14" fill="#1a1a1a" textAnchor="middle">6</text>
              <text x="260" y="75" fontSize="14" fill="#1a1a1a" textAnchor="middle">8</text>
              <circle cx="140" cy="50" r="5" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
              <line x1="20" y1="50" x2="140" y2="50" stroke="#10b981" strokeWidth="4" markerStart="url(#arrowleft2)" />
            </svg>
            <p className="text-sm text-ink-2 text-center mt-3">
              <span className="font-semibold text-lg">x &lt; 4</span><br />
              <span className="text-accent font-semibold">空心圆点：不包含 4</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 71) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📈 本周图解</h3>
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 400 400" className="w-full max-w-[400px] h-auto">
            <defs>
              <marker id="arrowright" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                <polygon points="0,0 10,5 0,10" fill="#1a1a1a" />
              </marker>
              <marker id="arrowup" markerWidth="10" markerHeight="10" refX="5" refY="2" orient="auto">
                <polygon points="0,10 5,0 10,10" fill="#1a1a1a" />
              </marker>
            </defs>
            
            {/* Grid lines */}
            <line x1="50" y1="50" x2="50" y2="350" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="100" y1="50" x2="100" y2="350" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="150" y1="50" x2="150" y2="350" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="200" y1="50" x2="200" y2="350" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="250" y1="50" x2="250" y2="350" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="300" y1="50" x2="300" y2="350" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="350" y1="50" x2="350" y2="350" stroke="#e5e7eb" strokeWidth="1" />
            
            <line x1="50" y1="50" x2="350" y2="50" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="50" y1="100" x2="350" y2="100" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="50" y1="150" x2="350" y2="150" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="50" y1="200" x2="350" y2="200" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="50" y1="250" x2="350" y2="250" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="50" y1="300" x2="350" y2="300" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="50" y1="350" x2="350" y2="350" stroke="#e5e7eb" strokeWidth="1" />
            
            {/* Axes */}
            <line x1="50" y1="350" x2="380" y2="350" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrowright)" />
            <line x1="50" y1="350" x2="50" y2="20" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrowup)" />
            
            {/* Axis labels */}
            <text x="390" y="355" fontSize="16" fill="#1a1a1a" fontWeight="600">x</text>
            <text x="40" y="15" fontSize="16" fill="#1a1a1a" fontWeight="600">y</text>
            
            {/* Number labels on x-axis */}
            <text x="50" y="370" fontSize="14" fill="#1a1a1a" textAnchor="middle">0</text>
            <text x="100" y="370" fontSize="14" fill="#1a1a1a" textAnchor="middle">1</text>
            <text x="150" y="370" fontSize="14" fill="#1a1a1a" textAnchor="middle">2</text>
            <text x="200" y="370" fontSize="14" fill="#1a1a1a" textAnchor="middle">3</text>
            <text x="250" y="370" fontSize="14" fill="#1a1a1a" textAnchor="middle">4</text>
            <text x="300" y="370" fontSize="14" fill="#1a1a1a" textAnchor="middle">5</text>
            <text x="350" y="370" fontSize="14" fill="#1a1a1a" textAnchor="middle">6</text>
            
            {/* Number labels on y-axis */}
            <text x="35" y="355" fontSize="14" fill="#1a1a1a" textAnchor="end">0</text>
            <text x="35" y="305" fontSize="14" fill="#1a1a1a" textAnchor="end">1</text>
            <text x="35" y="255" fontSize="14" fill="#1a1a1a" textAnchor="end">2</text>
            <text x="35" y="205" fontSize="14" fill="#1a1a1a" textAnchor="end">3</text>
            <text x="35" y="155" fontSize="14" fill="#1a1a1a" textAnchor="end">4</text>
            <text x="35" y="105" fontSize="14" fill="#1a1a1a" textAnchor="end">5</text>
            <text x="35" y="55" fontSize="14" fill="#1a1a1a" textAnchor="end">6</text>
            
            {/* The line 2x + y = 6 passing through (0,6) and (3,0) */}
            <line x1="50" y1="50" x2="200" y2="350" stroke="#d97706" strokeWidth="3" />
            
            {/* Point (0, 6) */}
            <circle cx="50" cy="50" r="5" fill="#10b981" stroke="#1a1a1a" strokeWidth="2" />
            <text x="70" y="55" fontSize="14" fill="#10b981" fontWeight="600">(0, 6)</text>
            
            {/* Point (3, 0) */}
            <circle cx="200" cy="350" r="5" fill="#10b981" stroke="#1a1a1a" strokeWidth="2" />
            <text x="210" y="345" fontSize="14" fill="#10b981" fontWeight="600">(3, 0)</text>
            
            {/* Equation label */}
            <text x="200" y="150" fontSize="16" fill="#d97706" fontWeight="700">2x + y = 6</text>
          </svg>
          <p className="text-sm text-ink-2 text-center mt-3 max-w-md">
            <span className="font-semibold">直线方程</span><br />
            2x + y = 6<br />
            经过 (3, 0) 和 (0, 6)
          </p>
        </div>
      </div>
    );
  }

  return null;
}
