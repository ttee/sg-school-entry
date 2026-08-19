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

  if (weekNumber === 72) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="flex flex-col items-center max-w-md mx-auto">
          <svg viewBox="0 0 400 400" className="w-full max-w-[400px] h-auto">
            {/* Axes */}
            <line x1="50" y1="350" x2="50" y2="30" stroke="#1a1a1a" strokeWidth="2" />
            <line x1="30" y1="350" x2="370" y2="350" stroke="#1a1a1a" strokeWidth="2" />
            <text x="380" y="355" fontSize="14" fill="#1a1a1a" fontWeight="600">x</text>
            <text x="45" y="20" fontSize="14" fill="#1a1a1a" fontWeight="600">y</text>
            
            {/* Grid points */}
            <text x="40" y="355" fontSize="12" fill="#1a1a1a" textAnchor="end">0</text>
            <text x="110" y="365" fontSize="12" fill="#1a1a1a" textAnchor="middle">2</text>
            <text x="170" y="365" fontSize="12" fill="#1a1a1a" textAnchor="middle">4</text>
            <text x="230" y="365" fontSize="12" fill="#1a1a1a" textAnchor="middle">6</text>
            <text x="290" y="365" fontSize="12" fill="#1a1a1a" textAnchor="middle">8</text>
            <text x="350" y="365" fontSize="12" fill="#1a1a1a" textAnchor="middle">10</text>
            <text x="35" y="295" fontSize="12" fill="#1a1a1a" textAnchor="end">2</text>
            <text x="35" y="235" fontSize="12" fill="#1a1a1a" textAnchor="end">4</text>
            <text x="35" y="175" fontSize="12" fill="#1a1a1a" textAnchor="end">6</text>
            <text x="35" y="115" fontSize="12" fill="#1a1a1a" textAnchor="end">8</text>
            <text x="35" y="55" fontSize="12" fill="#1a1a1a" textAnchor="end">10</text>
            
            {/* Line 1: x + y = 10 passing through (0,10) and (10,0) */}
            <line x1="50" y1="50" x2="350" y2="350" stroke="#d97706" strokeWidth="3" />
            <text x="320" y="80" fontSize="14" fill="#d97706" fontWeight="600">x + y = 10</text>
            
            {/* Line 2: x - y = 4 passing through (4,0) and (7,3) */}
            <line x1="170" y1="350" x2="350" y2="170" stroke="#3b82f6" strokeWidth="3" />
            <text x="280" y="280" fontSize="14" fill="#3b82f6" fontWeight="600">x − y = 4</text>
            
            {/* Intersection point (7, 3) */}
            <circle cx="260" cy="260" r="6" fill="#10b981" stroke="#1a1a1a" strokeWidth="2" />
            <text x="275" y="245" fontSize="16" fill="#10b981" fontWeight="700">(7, 3)</text>
          </svg>
          <p className="text-sm text-ink-2 text-center mt-3">
            <span className="font-semibold text-lg">联立方程的图解法</span><br />
            <span className="text-accent">两条直线交于一点 (7, 3)</span><br />
            解是 x = 7, y = 3
          </p>
        </div>
      </div>
    );
  }

  if (weekNumber === 75) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📐 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagram 1: Two congruent triangles (one rotated) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Triangle A */}
              <polygon points="30,120 80,40 130,120" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="50" y="85" fontSize="12" fill="#d97706" fontWeight="600">4</text>
              <text x="100" y="85" fontSize="12" fill="#d97706" fontWeight="600">5</text>
              <text x="75" y="135" fontSize="12" fill="#d97706" fontWeight="600">6</text>
              <text x="80" y="25" fontSize="14" fill="#1a1a1a" fontWeight="600">A</text>
              
              {/* Triangle B (rotated) */}
              <g transform="translate(150, 100) rotate(45) translate(-50, -40)">
                <polygon points="30,40 80,40 55,90" fill="none" stroke="#10b981" strokeWidth="2" />
              </g>
              <text x="150" y="105" fontSize="14" fill="#1a1a1a" fontWeight="600">B</text>
              <text x="155" y="125" fontSize="11" fill="#6b7280">(rotated)</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              全等（旋转 OK）<br />
              <span className="text-xs text-accent">同形同大小</span>
            </p>
          </div>

          {/* Diagram 2: Two congruent squares (one reflected) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Square A */}
              <rect x="20" y="60" width="60" height="60" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="45" y="50" fontSize="12" fill="#d97706" fontWeight="600">7 cm</text>
              <text x="50" y="95" fontSize="14" fill="#1a1a1a" fontWeight="600">A</text>
              
              {/* Square B (reflected) - mirror image */}
              <rect x="120" y="60" width="60" height="60" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="145" y="50" fontSize="12" fill="#10b981" fontWeight="600">7 cm</text>
              <text x="150" y="95" fontSize="14" fill="#1a1a1a" fontWeight="600">B</text>
              
              {/* Mirror line */}
              <line x1="100" y1="40" x2="100" y2="140" stroke="#6b7280" strokeWidth="1" strokeDasharray="5,5" />
              <text x="85" y="155" fontSize="11" fill="#6b7280">mirror</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              全等（翻转 OK）<br />
              <span className="text-xs text-accent">同形同大小</span>
            </p>
          </div>

          {/* Diagram 3: Two non-congruent rectangles */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Rectangle A */}
              <rect x="20" y="40" width="80" height="45" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="55" y="30" fontSize="12" fill="#d97706" fontWeight="600">9 cm</text>
              <text x="5" y="70" fontSize="12" fill="#d97706" fontWeight="600">5 cm</text>
              <text x="60" y="68" fontSize="14" fill="#1a1a1a" fontWeight="600">A</text>
              
              {/* Rectangle B (different size) */}
              <rect x="30" y="110" width="120" height="67.5" fill="none" stroke="#ef4444" strokeWidth="2" />
              <text x="75" y="100" fontSize="12" fill="#ef4444" fontWeight="600">12 cm</text>
              <text x="5" y="150" fontSize="12" fill="#ef4444" fontWeight="600">8 cm</text>
              <text x="90" y="150" fontSize="14" fill="#1a1a1a" fontWeight="600">B</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              <span className="text-red-600">不全等</span><br />
              <span className="text-xs text-muted">同形不同大小</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 76) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📐 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagram 1: Two similar rectangles (scale factor 2) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Rectangle A */}
              <rect x="30" y="60" width="60" height="40" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="55" y="50" fontSize="12" fill="#d97706" fontWeight="600">6 cm</text>
              <text x="15" y="85" fontSize="12" fill="#d97706" fontWeight="600">4 cm</text>
              <text x="60" y="85" fontSize="14" fill="#1a1a1a" fontWeight="600">A</text>
              
              {/* Rectangle B (scale factor 2) */}
              <rect x="20" y="120" width="120" height="80" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="70" y="110" fontSize="12" fill="#10b981" fontWeight="600">12 cm</text>
              <text x="5" y="165" fontSize="12" fill="#10b981" fontWeight="600">8 cm</text>
              <text x="80" y="165" fontSize="14" fill="#1a1a1a" fontWeight="600">B</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              相似（比例 1:2）<br />
              <span className="text-xs text-accent">同形不同大小</span>
            </p>
          </div>

          {/* Diagram 2: Two similar triangles (scale factor 3) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Triangle A */}
              <polygon points="40,100 80,40 120,100" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="55" y="75" fontSize="11" fill="#d97706" fontWeight="600">3</text>
              <text x="95" y="75" fontSize="11" fill="#d97706" fontWeight="600">3</text>
              <text x="75" y="110" fontSize="11" fill="#d97706" fontWeight="600">4</text>
              <text x="80" y="30" fontSize="14" fill="#1a1a1a" fontWeight="600">A</text>
              
              {/* Triangle B (scale factor 3) */}
              <polygon points="20,180 100,60 180,180" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="50" y="125" fontSize="11" fill="#10b981" fontWeight="600">9</text>
              <text x="140" y="125" fontSize="11" fill="#10b981" fontWeight="600">9</text>
              <text x="95" y="190" fontSize="11" fill="#10b981" fontWeight="600">12</text>
              <text x="100" y="50" fontSize="14" fill="#1a1a1a" fontWeight="600">B</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              相似（比例 1:3）<br />
              <span className="text-xs text-accent">同形不同大小</span>
            </p>
          </div>

          {/* Diagram 3: Non-similar figures (same area, different shape) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Square A: 6×6 = 36 */}
              <rect x="30" y="40" width="60" height="60" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="55" y="30" fontSize="12" fill="#d97706" fontWeight="600">6 cm</text>
              <text x="15" y="75" fontSize="12" fill="#d97706" fontWeight="600">6 cm</text>
              <text x="60" y="75" fontSize="14" fill="#1a1a1a" fontWeight="600">A</text>
              <text x="40" y="115" fontSize="10" fill="#6b7280">Area 36 cm²</text>
              
              {/* Rectangle B: 9×4 = 36 */}
              <rect x="25" y="130" width="90" height="40" fill="none" stroke="#ef4444" strokeWidth="2" />
              <text x="60" y="120" fontSize="12" fill="#ef4444" fontWeight="600">9 cm</text>
              <text x="5" y="155" fontSize="12" fill="#ef4444" fontWeight="600">4 cm</text>
              <text x="70" y="155" fontSize="14" fill="#1a1a1a" fontWeight="600">B</text>
              <text x="35" y="185" fontSize="10" fill="#6b7280">Area 36 cm²</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              <span className="text-red-600">不相似</span><br />
              <span className="text-xs text-muted">面积相同形状不同</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 77) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📐 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagram 1: Similar triangles with marked corresponding angles */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 220 200" className="w-full max-w-[220px] h-auto">
              {/* Triangle ABC */}
              <polygon points="30,120 90,40 150,120" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="20" y="135" fontSize="12" fill="#1a1a1a" fontWeight="600">A</text>
              <text x="90" y="30" fontSize="12" fill="#1a1a1a" fontWeight="600">B</text>
              <text x="155" y="135" fontSize="12" fill="#1a1a1a" fontWeight="600">C</text>
              {/* Mark angles with arcs */}
              <path d="M 40 120 A 15 15 0 0 1 45 110" fill="none" stroke="#d97706" strokeWidth="1.5" />
              <text x="48" y="118" fontSize="10" fill="#d97706" fontWeight="600">∠A</text>
              <path d="M 85 50 A 15 15 0 0 1 95 50" fill="none" stroke="#d97706" strokeWidth="1.5" />
              <text x="88" y="63" fontSize="10" fill="#d97706" fontWeight="600">∠B</text>
              <path d="M 140 115 A 15 15 0 0 1 145 105" fill="none" stroke="#d97706" strokeWidth="1.5" />
              <text x="130" y="118" fontSize="10" fill="#d97706" fontWeight="600">∠C</text>
              {/* Side lengths */}
              <text x="50" y="85" fontSize="11" fill="#d97706" fontWeight="600">5</text>
              <text x="115" y="85" fontSize="11" fill="#d97706" fontWeight="600">5</text>
              <text x="85" y="135" fontSize="11" fill="#d97706" fontWeight="600">8</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              标记对应角<br />
              <span className="text-xs text-accent">∠A = ∠D, ∠B = ∠E, ∠C = ∠F</span>
            </p>
          </div>

          {/* Diagram 2: Similar triangle with marked corresponding sides */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 220 200" className="w-full max-w-[220px] h-auto">
              {/* Triangle DEF (scale factor 2) */}
              <polygon points="10,180 110,20 210,180" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="5" y="195" fontSize="12" fill="#1a1a1a" fontWeight="600">D</text>
              <text x="108" y="10" fontSize="12" fill="#1a1a1a" fontWeight="600">E</text>
              <text x="215" y="195" fontSize="12" fill="#1a1a1a" fontWeight="600">F</text>
              {/* Mark angles */}
              <path d="M 25 180 A 20 20 0 0 1 32 168" fill="none" stroke="#10b981" strokeWidth="1.5" />
              <text x="35" y="182" fontSize="10" fill="#10b981" fontWeight="600">∠D</text>
              <path d="M 100 35 A 20 20 0 0 1 120 35" fill="none" stroke="#10b981" strokeWidth="1.5" />
              <text x="107" y="52" fontSize="10" fill="#10b981" fontWeight="600">∠E</text>
              <path d="M 195 175 A 20 20 0 0 1 200 163" fill="none" stroke="#10b981" strokeWidth="1.5" />
              <text x="183" y="182" fontSize="10" fill="#10b981" fontWeight="600">∠F</text>
              {/* Side lengths */}
              <text x="45" y="110" fontSize="11" fill="#10b981" fontWeight="600">10</text>
              <text x="155" y="110" fontSize="11" fill="#10b981" fontWeight="600">10</text>
              <text x="105" y="195" fontSize="11" fill="#10b981" fontWeight="600">16</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              标记对应边（比例 5:10 = 1:2）<br />
              <span className="text-xs text-accent">AB:DE = BC:EF = AC:DF</span>
            </p>
          </div>

          {/* Diagram 3: Properties summary with marked rectangle */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Rectangle with marked angles */}
              <rect x="20" y="40" width="80" height="50" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="55" y="30" fontSize="11" fill="#d97706" fontWeight="600">4 cm</text>
              <text x="5" y="70" fontSize="11" fill="#d97706" fontWeight="600">3 cm</text>
              {/* Mark right angles */}
              <rect x="20" y="40" width="8" height="8" fill="none" stroke="#d97706" strokeWidth="1" />
              <rect x="92" y="40" width="8" height="8" fill="none" stroke="#d97706" strokeWidth="1" />
              <rect x="20" y="82" width="8" height="8" fill="none" stroke="#d97706" strokeWidth="1" />
              <rect x="92" y="82" width="8" height="8" fill="none" stroke="#d97706" strokeWidth="1" />
              <text x="60" y="70" fontSize="14" fill="#1a1a1a" fontWeight="600">P</text>
              
              {/* Similar rectangle (scale 2) */}
              <rect x="10" y="110" width="160" height="100" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="80" y="100" fontSize="11" fill="#10b981" fontWeight="600">8 cm</text>
              <text x="-5" y="165" fontSize="11" fill="#10b981" fontWeight="600">6 cm</text>
              {/* Mark right angles */}
              <rect x="10" y="110" width="10" height="10" fill="none" stroke="#10b981" strokeWidth="1" />
              <rect x="160" y="110" width="10" height="10" fill="none" stroke="#10b981" strokeWidth="1" />
              <rect x="10" y="200" width="10" height="10" fill="none" stroke="#10b981" strokeWidth="1" />
              <rect x="160" y="200" width="10" height="10" fill="none" stroke="#10b981" strokeWidth="1" />
              <text x="90" y="165" fontSize="14" fill="#1a1a1a" fontWeight="600">Q</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              G2.3 两条性质<br />
              <span className="text-xs text-accent">对应角相等 · 对应边成比例</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 78) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📐 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagram 1: Enlargement with centre O, scale factor k = 2 */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Centre O */}
              <circle cx="30" cy="150" r="3" fill="#1a1a1a" />
              <text x="22" y="168" fontSize="12" fill="#1a1a1a" fontWeight="600">O</text>
              
              {/* Object triangle ABC (small) */}
              <polygon points="60,120 90,80 120,120" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="52" y="128" fontSize="11" fill="#d97706" fontWeight="600">A</text>
              <text x="88" y="73" fontSize="11" fill="#d97706" fontWeight="600">B</text>
              <text x="123" y="128" fontSize="11" fill="#d97706" fontWeight="600">C</text>
              <text x="85" y="110" fontSize="10" fill="#d97706" fontWeight="600">6</text>
              
              {/* Dashed lines from O through object to image */}
              <line x1="30" y1="150" x2="120" y2="40" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="30" y1="150" x2="180" y2="40" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="30" y1="150" x2="210" y2="120" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
              
              {/* Image triangle A'B'C' (enlarged, k=2) */}
              <polygon points="90,90 150,40 180,90" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="82" y="98" fontSize="11" fill="#10b981" fontWeight="600">A'</text>
              <text x="148" y="33" fontSize="11" fill="#10b981" fontWeight="600">B'</text>
              <text x="183" y="98" fontSize="11" fill="#10b981" fontWeight="600">C'</text>
              <text x="135" y="73" fontSize="10" fill="#10b981" fontWeight="600">12</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              放大 (k = 2)<br />
              <span className="text-xs text-accent">中心 O · 像边 = 2 × 物边</span>
            </p>
          </div>

          {/* Diagram 2: Reduction with centre O, scale factor k = 1/2 */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Centre O */}
              <circle cx="30" cy="150" r="3" fill="#1a1a1a" />
              <text x="22" y="168" fontSize="12" fill="#1a1a1a" fontWeight="600">O</text>
              
              {/* Object rectangle PQRS (large) */}
              <rect x="80" y="60" width="80" height="60" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="115" y="50" fontSize="10" fill="#d97706" fontWeight="600">8 cm</text>
              <text x="65" y="95" fontSize="10" fill="#d97706" fontWeight="600">6 cm</text>
              <text x="72" y="68" fontSize="11" fill="#d97706" fontWeight="600">P</text>
              
              {/* Dashed lines from O through object to image */}
              <line x1="30" y1="150" x2="80" y2="60" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="30" y1="150" x2="160" y2="60" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="30" y1="150" x2="80" y2="120" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="30" y1="150" x2="160" y2="120" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
              
              {/* Image rectangle P'Q'R'S' (reduced, k=1/2) */}
              <rect x="55" y="105" width="40" height="30" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="67" y="100" fontSize="10" fill="#10b981" fontWeight="600">4 cm</text>
              <text x="40" y="123" fontSize="10" fill="#10b981" fontWeight="600">3 cm</text>
              <text x="47" y="113" fontSize="11" fill="#10b981" fontWeight="600">P'</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              缩小 (k = 1/2)<br />
              <span className="text-xs text-accent">中心 O · 像边 = ½ × 物边</span>
            </p>
          </div>

          {/* Diagram 3: Angles unchanged */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Centre O */}
              <circle cx="40" cy="140" r="3" fill="#1a1a1a" />
              <text x="32" y="158" fontSize="12" fill="#1a1a1a" fontWeight="600">O</text>
              
              {/* Object triangle with angle marked */}
              <polygon points="80,110 120,60 140,110" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="72" y="118" fontSize="11" fill="#d97706" fontWeight="600">X</text>
              <text x="118" y="53" fontSize="11" fill="#d97706" fontWeight="600">Y</text>
              <text x="143" y="118" fontSize="11" fill="#d97706" fontWeight="600">Z</text>
              {/* Mark angle */}
              <path d="M 90 110 A 15 15 0 0 1 95 100" fill="none" stroke="#d97706" strokeWidth="1.5" />
              <text x="98" y="108" fontSize="11" fill="#d97706" fontWeight="600">60°</text>
              
              {/* Dashed lines */}
              <line x1="40" y1="140" x2="120" y2="60" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="40" y1="140" x2="160" y2="20" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="40" y1="140" x2="180" y2="80" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
              
              {/* Image triangle (enlarged k=2) with same angle */}
              <polygon points="100,125 160,25 200,125" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="92" y="133" fontSize="11" fill="#10b981" fontWeight="600">X'</text>
              <text x="158" y="18" fontSize="11" fill="#10b981" fontWeight="600">Y'</text>
              <text x="203" y="133" fontSize="11" fill="#10b981" fontWeight="600">Z'</text>
              {/* Mark same angle */}
              <path d="M 110 125 A 15 15 0 0 1 115 115" fill="none" stroke="#10b981" strokeWidth="1.5" />
              <text x="118" y="123" fontSize="11" fill="#10b981" fontWeight="600">60°</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              角度不变<br />
              <span className="text-xs text-accent">∠X = ∠X' = 60° (k 不作用于角)</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 79) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📐 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagram 1: Two congruent triangles (same size) - Problem: Are they congruent? */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Triangle ABC */}
              <polygon points="20,150 70,80 120,150" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="12" y="165" fontSize="11" fill="#1a1a1a" fontWeight="600">A</text>
              <text x="68" y="73" fontSize="11" fill="#1a1a1a" fontWeight="600">B</text>
              <text x="123" y="165" fontSize="11" fill="#1a1a1a" fontWeight="600">C</text>
              {/* Side lengths */}
              <text x="35" y="120" fontSize="10" fill="#d97706" fontWeight="600">8</text>
              <text x="88" y="120" fontSize="10" fill="#d97706" fontWeight="600">8</text>
              <text x="65" y="165" fontSize="10" fill="#d97706" fontWeight="600">10</text>
              
              {/* Triangle PQR (same size, congruent) */}
              <polygon points="130,150 180,80 230,150" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="122" y="165" fontSize="11" fill="#1a1a1a" fontWeight="600">P</text>
              <text x="178" y="73" fontSize="11" fill="#1a1a1a" fontWeight="600">Q</text>
              <text x="233" y="165" fontSize="11" fill="#1a1a1a" fontWeight="600">R</text>
              {/* Side lengths */}
              <text x="145" y="120" fontSize="10" fill="#10b981" fontWeight="600">8</text>
              <text x="198" y="120" fontSize="10" fill="#10b981" fontWeight="600">8</text>
              <text x="175" y="165" fontSize="10" fill="#10b981" fontWeight="600">10</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              全等？相似？<br />
              <span className="text-xs text-accent">边全相等 → 全等</span>
            </p>
          </div>

          {/* Diagram 2: Two similar rectangles with missing side - Problem: Find missing length */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Rectangle ABCD */}
              <rect x="30" y="50" width="60" height="40" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="55" y="45" fontSize="10" fill="#d97706" fontWeight="600">6 cm</text>
              <text x="15" y="75" fontSize="10" fill="#d97706" fontWeight="600">4 cm</text>
              <text x="60" y="75" fontSize="12" fill="#1a1a1a" fontWeight="600">ABCD</text>
              
              {/* Rectangle PQRS (similar, larger, one side missing) */}
              <rect x="20" y="110" width="120" height="80" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="70" y="105" fontSize="10" fill="#10b981" fontWeight="600">12 cm</text>
              <text x="5" y="155" fontSize="10" fill="#10b981" fontWeight="600">? cm</text>
              <text x="80" y="155" fontSize="12" fill="#1a1a1a" fontWeight="600">PQRS</text>
              
              {/* Ratio indicator */}
              <text x="100" y="75" fontSize="9" fill="#6b7280">6:12 = 1:2</text>
              <text x="100" y="87" fontSize="9" fill="#6b7280">4:? = 1:2</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              相似 · 求缺失边<br />
              <span className="text-xs text-accent">6:12 = 4:? → ? = 8</span>
            </p>
          </div>

          {/* Diagram 3: Two similar triangles with angles marked - Problem: Find angles */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Triangle XYZ */}
              <polygon points="30,130 80,60 130,130" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="22" y="145" fontSize="11" fill="#1a1a1a" fontWeight="600">X</text>
              <text x="78" y="53" fontSize="11" fill="#1a1a1a" fontWeight="600">Y</text>
              <text x="133" y="145" fontSize="11" fill="#1a1a1a" fontWeight="600">Z</text>
              {/* Side lengths */}
              <text x="45" y="100" fontSize="9" fill="#d97706" fontWeight="600">5</text>
              <text x="100" y="100" fontSize="9" fill="#d97706" fontWeight="600">5</text>
              <text x="75" y="145" fontSize="9" fill="#d97706" fontWeight="600">6</text>
              {/* Angle marks */}
              <path d="M 40 130 A 15 15 0 0 1 45 120" fill="none" stroke="#d97706" strokeWidth="1.5" />
              <text x="48" y="128" fontSize="9" fill="#d97706" fontWeight="600">60°</text>
              
              {/* Triangle DEF (similar, larger, angles marked) */}
              <polygon points="20,190 120,80 220,190" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="12" y="205" fontSize="11" fill="#1a1a1a" fontWeight="600">D</text>
              <text x="118" y="73" fontSize="11" fill="#1a1a1a" fontWeight="600">E</text>
              <text x="223" y="205" fontSize="11" fill="#1a1a1a" fontWeight="600">F</text>
              {/* Side lengths */}
              <text x="55" y="140" fontSize="9" fill="#10b981" fontWeight="600">10</text>
              <text x="160" y="140" fontSize="9" fill="#10b981" fontWeight="600">10</text>
              <text x="115" y="205" fontSize="9" fill="#10b981" fontWeight="600">12</text>
              {/* Angle marks */}
              <path d="M 35 190 A 20 20 0 0 1 42 178" fill="none" stroke="#10b981" strokeWidth="1.5" />
              <text x="45" y="188" fontSize="9" fill="#10b981" fontWeight="600">?°</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              相似 · 求角度<br />
              <span className="text-xs text-accent">对应角相等：∠D = 60°</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 80) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📐 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagram 1: Classroom plan scale 1:100 */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="25" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Classroom Plan</text>
              <text x="100" y="40" fontSize="9" fill="#6b7280" textAnchor="middle">Scale 1:100</text>
              
              {/* Classroom rectangle */}
              <rect x="40" y="60" width="120" height="80" fill="none" stroke="#d97706" strokeWidth="2" />
              
              {/* Door at the bottom */}
              <line x1="90" y1="140" x2="110" y2="140" stroke="#10b981" strokeWidth="3" />
              
              {/* Dimension line at top */}
              <line x1="40" y1="52" x2="160" y2="52" stroke="#6b7280" strokeWidth="1" markerStart="url(#arrowstart)" markerEnd="url(#arrowend)" />
              <text x="100" y="48" fontSize="10" fill="#d97706" fontWeight="600" textAnchor="middle">8 cm</text>
              
              {/* Arrow markers */}
              <defs>
                <marker id="arrowstart" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <polygon points="6,3 0,0 0,6" fill="#6b7280" />
                </marker>
                <marker id="arrowend" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <polygon points="0,3 6,0 6,6" fill="#6b7280" />
                </marker>
              </defs>
              
              {/* Calculation */}
              <text x="100" y="165" fontSize="9" fill="#1a1a1a" textAnchor="middle">Drawing: 8 cm</text>
              <text x="100" y="177" fontSize="9" fill="#d97706" fontWeight="600" textAnchor="middle">Actual: 8 × 100 = 800 cm</text>
              <text x="100" y="189" fontSize="9" fill="#10b981" fontWeight="600" textAnchor="middle">= 8 m</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              教室平面图<br />
              <span className="text-xs text-accent">1:100 → 8 cm = 8 m</span>
            </p>
          </div>

          {/* Diagram 2: Scale 1 cm : 2 m */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="25" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Garden Plan</text>
              <text x="100" y="40" fontSize="9" fill="#6b7280" textAnchor="middle">Scale 1 cm : 2 m</text>
              
              {/* Garden path */}
              <rect x="30" y="60" width="140" height="30" fill="#d4d4d4" stroke="#d97706" strokeWidth="2" />
              
              {/* Trees on sides */}
              <circle cx="20" cy="75" r="8" fill="#10b981" />
              <circle cx="180" cy="75" r="8" fill="#10b981" />
              
              {/* Dimension line */}
              <line x1="30" y1="100" x2="170" y2="100" stroke="#6b7280" strokeWidth="1" markerStart="url(#arrowstart2)" markerEnd="url(#arrowend2)" />
              <text x="100" y="115" fontSize="10" fill="#d97706" fontWeight="600" textAnchor="middle">5 cm</text>
              
              <defs>
                <marker id="arrowstart2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <polygon points="6,3 0,0 0,6" fill="#6b7280" />
                </marker>
                <marker id="arrowend2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <polygon points="0,3 6,0 6,6" fill="#6b7280" />
                </marker>
              </defs>
              
              {/* Calculation */}
              <text x="100" y="140" fontSize="9" fill="#1a1a1a" textAnchor="middle">Drawing: 5 cm</text>
              <text x="100" y="152" fontSize="9" fill="#6b7280" textAnchor="middle">1 cm = 2 m</text>
              <text x="100" y="164" fontSize="9" fill="#d97706" fontWeight="600" textAnchor="middle">Actual: 5 × 2 m</text>
              <text x="100" y="176" fontSize="9" fill="#10b981" fontWeight="600" textAnchor="middle">= 10 m</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              花园路径<br />
              <span className="text-xs text-accent">1 cm : 2 m → 5 cm = 10 m</span>
            </p>
          </div>

          {/* Diagram 3: Path with corner, scale 1:50, angles unchanged */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="25" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Path Plan</text>
              <text x="100" y="40" fontSize="9" fill="#6b7280" textAnchor="middle">Scale 1:50</text>
              
              {/* L-shaped path */}
              <polyline points="40,60 40,120 130,120" fill="none" stroke="#d97706" strokeWidth="3" />
              
              {/* Right angle marker */}
              <rect x="40" y="120" width="12" height="12" fill="none" stroke="#10b981" strokeWidth="1.5" transform="translate(0,-12)" />
              <text x="60" y="115" fontSize="9" fill="#10b981" fontWeight="600">90°</text>
              
              {/* Dimension on vertical segment */}
              <line x1="30" y1="60" x2="30" y2="120" stroke="#6b7280" strokeWidth="1" markerStart="url(#arrowstart3)" markerEnd="url(#arrowend3)" />
              <text x="20" y="93" fontSize="10" fill="#d97706" fontWeight="600" textAnchor="middle">6 cm</text>
              
              <defs>
                <marker id="arrowstart3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <polygon points="6,3 0,0 0,6" fill="#6b7280" />
                </marker>
                <marker id="arrowend3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <polygon points="0,3 6,0 6,6" fill="#6b7280" />
                </marker>
              </defs>
              
              {/* Calculation */}
              <text x="100" y="150" fontSize="9" fill="#1a1a1a" textAnchor="middle">Drawing: 6 cm</text>
              <text x="100" y="162" fontSize="9" fill="#d97706" fontWeight="600" textAnchor="middle">Actual: 6 × 50 = 300 cm</text>
              <text x="100" y="174" fontSize="9" fill="#10b981" fontWeight="600" textAnchor="middle">= 3 m</text>
              <text x="100" y="186" fontSize="8" fill="#6b7280" textAnchor="middle">Angle: 90° (unchanged)</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              路径转角<br />
              <span className="text-xs text-accent">1:50 → 6 cm = 3 m, 角度不变</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 81) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📐 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagram 1: Perpendicular bisector */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="20" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Perpendicular Bisector</text>
              
              {/* Line segment AB */}
              <line x1="40" y1="120" x2="160" y2="120" stroke="#1a1a1a" strokeWidth="2" />
              <circle cx="40" cy="120" r="3" fill="#1a1a1a" />
              <circle cx="160" cy="120" r="3" fill="#1a1a1a" />
              <text x="35" y="115" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="end">A</text>
              <text x="165" y="115" fontSize="11" fill="#1a1a1a" fontWeight="600">B</text>
              
              {/* Midpoint M */}
              <circle cx="100" cy="120" r="3" fill="#d97706" />
              <text x="100" y="135" fontSize="11" fill="#d97706" fontWeight="600" textAnchor="middle">M</text>
              
              {/* Perpendicular bisector (vertical line through M) */}
              <line x1="100" y1="40" x2="100" y2="180" stroke="#10b981" strokeWidth="2" strokeDasharray="4,2" />
              
              {/* Point P on perpendicular bisector */}
              <circle cx="100" cy="70" r="3" fill="#3b82f6" />
              <text x="108" y="68" fontSize="11" fill="#3b82f6" fontWeight="600">P</text>
              
              {/* PA and PB distances */}
              <line x1="100" y1="70" x2="40" y2="120" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2,2" />
              <line x1="100" y1="70" x2="160" y2="120" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="2,2" />
              
              {/* Distance labels */}
              <text x="60" y="90" fontSize="10" fill="#3b82f6" fontWeight="600">PA = 6 cm</text>
              <text x="115" y="90" fontSize="10" fill="#3b82f6" fontWeight="600">PB = 6 cm</text>
              
              {/* Right angle marker */}
              <rect x="96" y="116" width="8" height="8" fill="none" stroke="#10b981" strokeWidth="1.5" />
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              垂直平分线<br />
              <span className="text-xs text-accent">P 在垂直平分线上 → PA = PB</span>
            </p>
          </div>

          {/* Diagram 2: Angle bisector */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="20" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Angle Bisector</text>
              
              {/* Angle arms */}
              <line x1="100" y1="140" x2="100" y2="50" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="100" y1="140" x2="180" y2="70" stroke="#1a1a1a" strokeWidth="2" />
              
              {/* Vertex Y */}
              <circle cx="100" cy="140" r="3" fill="#1a1a1a" />
              <text x="100" y="155" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Y</text>
              
              {/* Labels X and Z */}
              <text x="100" y="43" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">X</text>
              <text x="188" y="68" fontSize="11" fill="#1a1a1a" fontWeight="600">Z</text>
              
              {/* Angle bisector */}
              <line x1="100" y1="140" x2="145" y2="85" stroke="#10b981" strokeWidth="2" strokeDasharray="4,2" />
              <text x="130" y="105" fontSize="11" fill="#10b981" fontWeight="600">W</text>
              
              {/* Original angle label */}
              <text x="108" y="125" fontSize="10" fill="#d97706" fontWeight="600">80°</text>
              
              {/* Two equal half-angles */}
              <path d="M 100 130 A 15 15 0 0 1 106 120" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="112" y="128" fontSize="9" fill="#3b82f6" fontWeight="600">40°</text>
              
              <path d="M 110 134 A 20 20 0 0 1 120 126" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="120" y="138" fontSize="9" fill="#3b82f6" fontWeight="600">40°</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              角平分线<br />
              <span className="text-xs text-accent">80° ÷ 2 = 40° + 40°</span>
            </p>
          </div>

          {/* Diagram 3: Distance from point on angle bisector to sides */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="20" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Distance to Sides</text>
              
              {/* Angle arms */}
              <line x1="60" y1="160" x2="60" y2="60" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="60" y1="160" x2="170" y2="80" stroke="#1a1a1a" strokeWidth="2" />
              
              {/* Vertex B */}
              <circle cx="60" cy="160" r="3" fill="#1a1a1a" />
              <text x="55" y="175" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="end">B</text>
              
              {/* Labels A and C */}
              <text x="55" y="58" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="end">A</text>
              <text x="178" y="78" fontSize="11" fill="#1a1a1a" fontWeight="600">C</text>
              
              {/* Angle bisector */}
              <line x1="60" y1="160" x2="120" y2="95" stroke="#10b981" strokeWidth="2" strokeDasharray="4,2" />
              
              {/* Point Q on bisector */}
              <circle cx="100" cy="115" r="3" fill="#3b82f6" />
              <text x="108" y="113" fontSize="11" fill="#3b82f6" fontWeight="600">Q</text>
              
              {/* Perpendicular distances to arms */}
              <line x1="100" y1="115" x2="60" y2="115" stroke="#d97706" strokeWidth="1.5" strokeDasharray="2,2" />
              <line x1="100" y1="115" x2="108" y2="130" stroke="#d97706" strokeWidth="1.5" strokeDasharray="2,2" />
              
              {/* Right angle markers */}
              <rect x="56" y="111" width="8" height="8" fill="none" stroke="#d97706" strokeWidth="1.5" />
              <rect x="104" y="126" width="8" height="8" fill="none" stroke="#d97706" strokeWidth="1.5" transform="rotate(-45 108 130)" />
              
              {/* Distance labels */}
              <text x="78" y="110" fontSize="10" fill="#d97706" fontWeight="600">5 cm</text>
              <text x="95" y="140" fontSize="10" fill="#d97706" fontWeight="600">5 cm</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              到两边等距<br />
              <span className="text-xs text-accent">Q 在角平分线上 → 距离相等</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 82) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📐 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagram 1: SSS Congruent */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 220 200" className="w-full max-w-[220px] h-auto">
              {/* Title */}
              <text x="110" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">SSS Congruent</text>
              
              {/* Triangle ABC */}
              <polygon points="20,140 60,70 100,140" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="12" y="155" fontSize="11" fill="#1a1a1a" fontWeight="600">A</text>
              <text x="58" y="63" fontSize="11" fill="#1a1a1a" fontWeight="600">B</text>
              <text x="103" y="155" fontSize="11" fill="#1a1a1a" fontWeight="600">C</text>
              {/* Side lengths */}
              <text x="30" y="110" fontSize="10" fill="#d97706" fontWeight="600">5</text>
              <text x="75" y="110" fontSize="10" fill="#d97706" fontWeight="600">7</text>
              <text x="55" y="155" fontSize="10" fill="#d97706" fontWeight="600">8</text>
              
              {/* Triangle PQR */}
              <polygon points="120,140 160,70 200,140" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="112" y="155" fontSize="11" fill="#1a1a1a" fontWeight="600">P</text>
              <text x="158" y="63" fontSize="11" fill="#1a1a1a" fontWeight="600">Q</text>
              <text x="203" y="155" fontSize="11" fill="#1a1a1a" fontWeight="600">R</text>
              {/* Side lengths */}
              <text x="130" y="110" fontSize="10" fill="#10b981" fontWeight="600">5</text>
              <text x="175" y="110" fontSize="10" fill="#10b981" fontWeight="600">7</text>
              <text x="155" y="155" fontSize="10" fill="#10b981" fontWeight="600">8</text>
              
              {/* Congruence mark */}
              <text x="110" y="175" fontSize="11" fill="#3b82f6" fontWeight="700">△ABC ≅ △PQR</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              SSS 全等<br />
              <span className="text-xs text-accent">三边相等 → 全等</span>
            </p>
          </div>

          {/* Diagram 2: AAA Similar (not congruent) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 220 200" className="w-full max-w-[220px] h-auto">
              {/* Title */}
              <text x="110" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">AAA Similar</text>
              
              {/* Triangle DEF (smaller) */}
              <polygon points="30,130 70,80 110,130" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="22" y="145" fontSize="11" fill="#1a1a1a" fontWeight="600">D</text>
              <text x="68" y="73" fontSize="11" fill="#1a1a1a" fontWeight="600">E</text>
              <text x="113" y="145" fontSize="11" fill="#1a1a1a" fontWeight="600">F</text>
              {/* Angle marks */}
              <text x="38" y="128" fontSize="9" fill="#d97706" fontWeight="600">50°</text>
              <text x="68" y="93" fontSize="9" fill="#d97706" fontWeight="600">60°</text>
              <text x="95" y="128" fontSize="9" fill="#d97706" fontWeight="600">70°</text>
              
              {/* Triangle XYZ (larger) */}
              <polygon points="120,150 180,60 240,150" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="112" y="165" fontSize="11" fill="#1a1a1a" fontWeight="600">X</text>
              <text x="178" y="53" fontSize="11" fill="#1a1a1a" fontWeight="600">Y</text>
              <text x="243" y="165" fontSize="11" fill="#1a1a1a" fontWeight="600">Z</text>
              {/* Angle marks */}
              <text x="128" y="148" fontSize="9" fill="#10b981" fontWeight="600">50°</text>
              <text x="178" y="78" fontSize="9" fill="#10b981" fontWeight="600">60°</text>
              <text x="220" y="148" fontSize="9" fill="#10b981" fontWeight="600">70°</text>
              
              {/* Similarity mark */}
              <text x="110" y="185" fontSize="11" fill="#3b82f6" fontWeight="700">△DEF ~ △XYZ</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              AAA 相似<br />
              <span className="text-xs text-accent">对应角相等 → 相似（非全等）</span>
            </p>
          </div>

          {/* Diagram 3: Proportional sides → Similar */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 220 200" className="w-full max-w-[220px] h-auto">
              {/* Title */}
              <text x="110" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Proportional → Similar</text>
              
              {/* Triangle JKL (3-4-5) */}
              <polygon points="30,135 30,90 75,135" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="22" y="150" fontSize="11" fill="#1a1a1a" fontWeight="600">J</text>
              <text x="22" y="85" fontSize="11" fill="#1a1a1a" fontWeight="600">K</text>
              <text x="78" y="150" fontSize="11" fill="#1a1a1a" fontWeight="600">L</text>
              {/* Side lengths */}
              <text x="15" y="115" fontSize="10" fill="#d97706" fontWeight="600">3</text>
              <text x="50" y="145" fontSize="10" fill="#d97706" fontWeight="600">4</text>
              <text x="48" y="110" fontSize="10" fill="#d97706" fontWeight="600">5</text>
              {/* Right angle marker */}
              <rect x="26" y="90" width="8" height="8" fill="none" stroke="#d97706" strokeWidth="1.5" />
              
              {/* Triangle MNO (6-8-10) */}
              <polygon points="110,155 110,65 200,155" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="102" y="170" fontSize="11" fill="#1a1a1a" fontWeight="600">M</text>
              <text x="102" y="60" fontSize="11" fill="#1a1a1a" fontWeight="600">N</text>
              <text x="203" y="170" fontSize="11" fill="#1a1a1a" fontWeight="600">O</text>
              {/* Side lengths */}
              <text x="95" y="115" fontSize="10" fill="#10b981" fontWeight="600">6</text>
              <text x="150" y="170" fontSize="10" fill="#10b981" fontWeight="600">8</text>
              <text x="145" y="110" fontSize="10" fill="#10b981" fontWeight="600">10</text>
              {/* Right angle marker */}
              <rect x="106" y="65" width="8" height="8" fill="none" stroke="#10b981" strokeWidth="1.5" />
              
              {/* Proportion mark */}
              <text x="110" y="190" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">3:6 = 4:8 = 5:10 = 1:2</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              边成比例 → 相似<br />
              <span className="text-xs text-accent">1:2 比例 → 相似（非全等）</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 83) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📐 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagram 1: Two similar triangles k=2, area ratio 4:1 */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 220 200" className="w-full max-w-[220px] h-auto">
              {/* Title */}
              <text x="110" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">k = 2, k² = 4</text>
              
              {/* Small triangle */}
              <polygon points="30,110 60,70 90,110" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="22" y="125" fontSize="11" fill="#1a1a1a" fontWeight="600">A</text>
              <text x="58" y="63" fontSize="11" fill="#1a1a1a" fontWeight="600">B</text>
              <text x="93" y="125" fontSize="11" fill="#1a1a1a" fontWeight="600">C</text>
              <text x="60" y="100" fontSize="11" fill="#d97706" fontWeight="700">5 cm²</text>
              
              {/* Large triangle (k=2) */}
              <polygon points="110,150 170,50 230,150" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="102" y="165" fontSize="11" fill="#1a1a1a" fontWeight="600">P</text>
              <text x="168" y="43" fontSize="11" fill="#1a1a1a" fontWeight="600">Q</text>
              <text x="233" y="165" fontSize="11" fill="#1a1a1a" fontWeight="600">R</text>
              <text x="170" y="115" fontSize="11" fill="#10b981" fontWeight="700">20 cm²</text>
              
              {/* Formula */}
              <text x="110" y="185" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">5 × 4 = 20</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              k = 2 → 面积 × 4<br />
              <span className="text-xs text-accent">5 cm² → 20 cm²</span>
            </p>
          </div>

          {/* Diagram 2: Two similar rectangles, area ratio 9:1 so k=3 */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 220 200" className="w-full max-w-[220px] h-auto">
              {/* Title */}
              <text x="110" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Area 9:1 → k = 3</text>
              
              {/* Small rectangle */}
              <rect x="30" y="60" width="40" height="30" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="45" y="50" fontSize="10" fill="#d97706" fontWeight="600">4 cm</text>
              <text x="50" y="80" fontSize="11" fill="#1a1a1a" fontWeight="600">P</text>
              
              {/* Large rectangle */}
              <rect x="100" y="80" width="120" height="90" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="150" y="70" fontSize="10" fill="#10b981" fontWeight="600">12 cm</text>
              <text x="160" y="130" fontSize="11" fill="#1a1a1a" fontWeight="600">Q</text>
              
              {/* Formula */}
              <text x="110" y="185" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">4 × 3 = 12</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              面积比 9:1 → k = 3<br />
              <span className="text-xs text-accent">4 cm → 12 cm</span>
            </p>
          </div>

          {/* Diagram 3: Two similar pentagons k=1/2, area ratio 1/4 */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 220 200" className="w-full max-w-[220px] h-auto">
              {/* Title */}
              <text x="110" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">k = 1/2, k² = 1/4</text>
              
              {/* Large pentagon */}
              <polygon points="30,80 50,50 90,50 110,80 70,120" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="70" y="90" fontSize="11" fill="#d97706" fontWeight="700">36 cm²</text>
              <text x="70" y="135" fontSize="11" fill="#1a1a1a" fontWeight="600">M</text>
              
              {/* Small pentagon (k=1/2) */}
              <polygon points="130,110 140,95 160,95 170,110 150,135" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="150" y="118" fontSize="11" fill="#10b981" fontWeight="700">9 cm²</text>
              <text x="150" y="150" fontSize="11" fill="#1a1a1a" fontWeight="600">N</text>
              
              {/* Formula */}
              <text x="110" y="175" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">36 × 1/4 = 9</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              k = 1/2 → 面积 × 1/4<br />
              <span className="text-xs text-accent">36 cm² → 9 cm²</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 84) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📐 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagram 1: Two similar cubes k=2, volume ratio 8:1 */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 220 200" className="w-full max-w-[220px] h-auto">
              {/* Title */}
              <text x="110" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">k = 2, k³ = 8</text>
              
              {/* Small cube */}
              <rect x="25" y="85" width="35" height="35" fill="none" stroke="#d97706" strokeWidth="2" />
              <line x1="60" y1="85" x2="75" y2="70" stroke="#d97706" strokeWidth="2" />
              <line x1="60" y1="120" x2="75" y2="105" stroke="#d97706" strokeWidth="2" />
              <line x1="25" y1="85" x2="40" y2="70" stroke="#d97706" strokeWidth="2" />
              <rect x="40" y="70" width="35" height="35" fill="none" stroke="#d97706" strokeWidth="2" />
              <line x1="25" y1="120" x2="40" y2="105" stroke="#d97706" strokeWidth="2" />
              <text x="47" y="100" fontSize="11" fill="#d97706" fontWeight="700">4 cm³</text>
              
              {/* Large cube (k=2) */}
              <rect x="110" y="60" width="70" height="70" fill="none" stroke="#10b981" strokeWidth="2" />
              <line x1="180" y1="60" x2="210" y2="30" stroke="#10b981" strokeWidth="2" />
              <line x1="180" y1="130" x2="210" y2="100" stroke="#10b981" strokeWidth="2" />
              <line x1="110" y1="60" x2="140" y2="30" stroke="#10b981" strokeWidth="2" />
              <rect x="140" y="30" width="70" height="70" fill="none" stroke="#10b981" strokeWidth="2" />
              <line x1="110" y1="130" x2="140" y2="100" stroke="#10b981" strokeWidth="2" />
              <text x="145" y="75" fontSize="11" fill="#10b981" fontWeight="700">32 cm³</text>
              
              {/* Formula */}
              <text x="110" y="165" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">4 × 8 = 32</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              k = 2 → 体积 × 8<br />
              <span className="text-xs text-accent">4 cm³ → 32 cm³</span>
            </p>
          </div>

          {/* Diagram 2: Two similar cylinders, volume ratio 27:1 so k=3 */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 220 200" className="w-full max-w-[220px] h-auto">
              {/* Title */}
              <text x="110" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Volume 27:1 → k = 3</text>
              
              {/* Small cylinder */}
              <ellipse cx="50" cy="90" rx="25" ry="8" fill="none" stroke="#d97706" strokeWidth="2" />
              <line x1="25" y1="90" x2="25" y2="130" stroke="#d97706" strokeWidth="2" />
              <line x1="75" y1="90" x2="75" y2="130" stroke="#d97706" strokeWidth="2" />
              <ellipse cx="50" cy="130" rx="25" ry="8" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="30" y="75" fontSize="10" fill="#d97706" fontWeight="600">2 cm</text>
              <text x="50" y="115" fontSize="11" fill="#1a1a1a" fontWeight="600">P</text>
              
              {/* Large cylinder */}
              <ellipse cx="160" cy="60" rx="50" ry="15" fill="none" stroke="#10b981" strokeWidth="2" />
              <line x1="110" y1="60" x2="110" y2="150" stroke="#10b981" strokeWidth="2" />
              <line x1="210" y1="60" x2="210" y2="150" stroke="#10b981" strokeWidth="2" />
              <ellipse cx="160" cy="150" rx="50" ry="15" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="140" y="40" fontSize="10" fill="#10b981" fontWeight="600">6 cm</text>
              <text x="160" y="110" fontSize="11" fill="#1a1a1a" fontWeight="600">Q</text>
              
              {/* Formula */}
              <text x="110" y="185" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">2 × 3 = 6</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              体积比 27:1 → k = 3<br />
              <span className="text-xs text-accent">2 cm → 6 cm</span>
            </p>
          </div>

          {/* Diagram 3: Two similar pyramids k=1/2, volume ratio 1/8 */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 220 200" className="w-full max-w-[220px] h-auto">
              {/* Title */}
              <text x="110" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">k = 1/2, k³ = 1/8</text>
              
              {/* Large pyramid */}
              <polygon points="30,120 70,40 110,120" fill="none" stroke="#d97706" strokeWidth="2" />
              <line x1="30" y1="120" x2="50" y2="130" stroke="#d97706" strokeWidth="2" />
              <line x1="110" y1="120" x2="90" y2="130" stroke="#d97706" strokeWidth="2" />
              <line x1="70" y1="40" x2="70" y2="60" stroke="#d97706" strokeWidth="2" />
              <polygon points="30,120 50,130 90,130 110,120" fill="none" stroke="#d97706" strokeWidth="2" />
              <text x="70" y="95" fontSize="11" fill="#d97706" fontWeight="700">64 cm³</text>
              <text x="70" y="145" fontSize="11" fill="#1a1a1a" fontWeight="600">M</text>
              
              {/* Small pyramid (k=1/2) */}
              <polygon points="145,135 160,100 175,135" fill="none" stroke="#10b981" strokeWidth="2" />
              <line x1="145" y1="135" x2="152" y2="142" stroke="#10b981" strokeWidth="2" />
              <line x1="175" y1="135" x2="168" y2="142" stroke="#10b981" strokeWidth="2" />
              <line x1="160" y1="100" x2="160" y2="110" stroke="#10b981" strokeWidth="2" />
              <polygon points="145,135 152,142 168,142 175,135" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="160" y="125" fontSize="11" fill="#10b981" fontWeight="700">8 cm³</text>
              <text x="160" y="160" fontSize="11" fill="#1a1a1a" fontWeight="600">N</text>
              
              {/* Formula */}
              <text x="110" y="185" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">64 × 1/8 = 8</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              k = 1/2 → 体积 × 1/8<br />
              <span className="text-xs text-accent">64 cm³ → 8 cm³</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 85) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📐 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagram 1: 9-12-15 triangle */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 180" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">9² + 12² = 15²</text>
              
              {/* Right-angled triangle */}
              <line x1="30" y1="130" x2="150" y2="130" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="30" y1="130" x2="30" y2="40" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="30" y1="40" x2="150" y2="130" stroke="#d97706" strokeWidth="2" />
              
              {/* Right angle marker */}
              <rect x="30" y="120" width="10" height="10" fill="none" stroke="#1a1a1a" strokeWidth="1" />
              
              {/* Labels */}
              <text x="90" y="145" fontSize="12" fill="#1a1a1a" fontWeight="600">12 cm</text>
              <text x="15" y="90" fontSize="12" fill="#1a1a1a" fontWeight="600">9 cm</text>
              <text x="95" y="75" fontSize="13" fill="#d97706" fontWeight="700">15 cm</text>
              
              {/* Vertices */}
              <circle cx="30" cy="130" r="2" fill="#1a1a1a" />
              <circle cx="150" cy="130" r="2" fill="#1a1a1a" />
              <circle cx="30" cy="40" r="2" fill="#1a1a1a" />
              <text x="25" y="150" fontSize="11" fill="#1a1a1a" fontWeight="600">C</text>
              <text x="155" y="145" fontSize="11" fill="#1a1a1a" fontWeight="600">B</text>
              <text x="25" y="30" fontSize="11" fill="#1a1a1a" fontWeight="600">A</text>
              
              {/* Formula */}
              <text x="100" y="170" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">81 + 144 = 225</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              两条直角边 9 cm 和 12 cm<br />
              <span className="text-xs text-accent">斜边 15 cm</span>
            </p>
          </div>

          {/* Diagram 2: 8-15-17 triangle */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 180" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">8² + 15² = 17²</text>
              
              {/* Right-angled triangle */}
              <line x1="30" y1="130" x2="165" y2="130" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="30" y1="130" x2="30" y2="60" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="30" y1="60" x2="165" y2="130" stroke="#10b981" strokeWidth="2" />
              
              {/* Right angle marker */}
              <rect x="30" y="120" width="10" height="10" fill="none" stroke="#1a1a1a" strokeWidth="1" />
              
              {/* Labels */}
              <text x="95" y="145" fontSize="12" fill="#1a1a1a" fontWeight="600">15 cm</text>
              <text x="12" y="100" fontSize="12" fill="#1a1a1a" fontWeight="600">8 cm</text>
              <text x="105" y="85" fontSize="13" fill="#10b981" fontWeight="700">17 cm</text>
              
              {/* Vertices */}
              <circle cx="30" cy="130" r="2" fill="#1a1a1a" />
              <circle cx="165" cy="130" r="2" fill="#1a1a1a" />
              <circle cx="30" cy="60" r="2" fill="#1a1a1a" />
              <text x="25" y="150" fontSize="11" fill="#1a1a1a" fontWeight="600">C</text>
              <text x="170" y="145" fontSize="11" fill="#1a1a1a" fontWeight="600">B</text>
              <text x="25" y="50" fontSize="11" fill="#1a1a1a" fontWeight="600">A</text>
              
              {/* Formula */}
              <text x="100" y="170" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">64 + 225 = 289</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              两条直角边 8 cm 和 15 cm<br />
              <span className="text-xs text-accent">斜边 17 cm</span>
            </p>
          </div>

          {/* Diagram 3: 10-24-26 triangle (hypotenuse given) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 180" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">10² + 24² = 26²</text>
              
              {/* Right-angled triangle */}
              <line x1="30" y1="130" x2="150" y2="130" stroke="#8b5cf6" strokeWidth="2" />
              <line x1="30" y1="130" x2="30" y2="35" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="30" y1="35" x2="150" y2="130" stroke="#d97706" strokeWidth="2" />
              
              {/* Right angle marker */}
              <rect x="30" y="120" width="10" height="10" fill="none" stroke="#1a1a1a" strokeWidth="1" />
              
              {/* Labels */}
              <text x="90" y="145" fontSize="12" fill="#8b5cf6" fontWeight="700">24 cm</text>
              <text x="12" y="90" fontSize="12" fill="#1a1a1a" fontWeight="600">10 cm</text>
              <text x="95" y="70" fontSize="13" fill="#d97706" fontWeight="700">26 cm</text>
              
              {/* Vertices */}
              <circle cx="30" cy="130" r="2" fill="#1a1a1a" />
              <circle cx="150" cy="130" r="2" fill="#1a1a1a" />
              <circle cx="30" cy="35" r="2" fill="#1a1a1a" />
              <text x="25" y="150" fontSize="11" fill="#1a1a1a" fontWeight="600">C</text>
              <text x="155" y="145" fontSize="11" fill="#1a1a1a" fontWeight="600">B</text>
              <text x="25" y="25" fontSize="11" fill="#1a1a1a" fontWeight="600">A</text>
              
              {/* Formula */}
              <text x="100" y="170" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">100 + 576 = 676</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              斜边 26 cm，一条直角边 10 cm<br />
              <span className="text-xs text-accent">另一条直角边 24 cm</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 86) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📐 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagram 1: 20-21-29 triangle with sin/cos/tan */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">sin A, cos A, tan A</text>
              
              {/* Right-angled triangle */}
              <line x1="30" y1="150" x2="130" y2="150" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="130" y1="150" x2="130" y2="60" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="30" y1="150" x2="130" y2="60" stroke="#d97706" strokeWidth="2" />
              
              {/* Right angle marker at C */}
              <rect x="120" y="140" width="10" height="10" fill="none" stroke="#1a1a1a" strokeWidth="1" />
              
              {/* Labels for sides */}
              <text x="80" y="165" fontSize="12" fill="#d97706" fontWeight="600">AC = 20 cm (adj)</text>
              <text x="145" y="108" fontSize="12" fill="#10b981" fontWeight="600">BC = 21 cm (opp)</text>
              <text x="65" y="95" fontSize="12" fill="#8b5cf6" fontWeight="600">AB = 29 cm</text>
              
              {/* Vertices */}
              <circle cx="30" cy="150" r="2" fill="#1a1a1a" />
              <circle cx="130" cy="150" r="2" fill="#1a1a1a" />
              <circle cx="130" cy="60" r="2" fill="#1a1a1a" />
              <text x="25" y="165" fontSize="11" fill="#1a1a1a" fontWeight="600">A</text>
              <text x="135" y="165" fontSize="11" fill="#1a1a1a" fontWeight="600">C</text>
              <text x="135" y="55" fontSize="11" fill="#1a1a1a" fontWeight="600">B</text>
              
              {/* Ratios */}
              <text x="100" y="185" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">sin A = 21/29</text>
              <text x="100" y="195" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">cos A = 20/29, tan A = 21/20</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              直角在 C，∠A 处<br />
              <span className="text-xs text-accent">sin A = 对边/斜边 = 21/29</span>
            </p>
          </div>

          {/* Diagram 2: 12-35-37 triangle with sin A */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">sin A = 35/37</text>
              
              {/* Right-angled triangle */}
              <line x1="30" y1="150" x2="90" y2="150" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="90" y1="150" x2="90" y2="30" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="30" y1="150" x2="90" y2="30" stroke="#d97706" strokeWidth="2" />
              
              {/* Right angle marker at C */}
              <rect x="80" y="140" width="10" height="10" fill="none" stroke="#1a1a1a" strokeWidth="1" />
              
              {/* Labels for sides */}
              <text x="60" y="165" fontSize="12" fill="#d97706" fontWeight="600">AC = 12 cm</text>
              <text x="100" y="95" fontSize="12" fill="#10b981" fontWeight="600">BC = 35 cm</text>
              <text x="45" y="80" fontSize="12" fill="#8b5cf6" fontWeight="600">AB = 37 cm</text>
              
              {/* Vertices */}
              <circle cx="30" cy="150" r="2" fill="#1a1a1a" />
              <circle cx="90" cy="150" r="2" fill="#1a1a1a" />
              <circle cx="90" cy="30" r="2" fill="#1a1a1a" />
              <text x="25" y="165" fontSize="11" fill="#1a1a1a" fontWeight="600">A</text>
              <text x="95" y="165" fontSize="11" fill="#1a1a1a" fontWeight="600">C</text>
              <text x="95" y="25" fontSize="11" fill="#1a1a1a" fontWeight="600">B</text>
              
              {/* Ratio */}
              <text x="100" y="185" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">sin A = opposite / hypotenuse</text>
              <text x="100" y="197" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">sin A = 35/37</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              直角在 C，求 sin A<br />
              <span className="text-xs text-accent">对边 BC = 35, 斜边 AB = 37</span>
            </p>
          </div>

          {/* Diagram 3: tan A = 33/56 given, find opposite */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">tan A = 33/56</text>
              
              {/* Right-angled triangle */}
              <line x1="30" y1="150" x2="150" y2="150" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="150" y1="150" x2="150" y2="80" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="30" y1="150" x2="150" y2="80" stroke="#d97706" strokeWidth="2" />
              
              {/* Right angle marker at C */}
              <rect x="140" y="140" width="10" height="10" fill="none" stroke="#1a1a1a" strokeWidth="1" />
              
              {/* Labels for sides */}
              <text x="90" y="165" fontSize="12" fill="#d97706" fontWeight="600">AC = 56 cm (adj)</text>
              <text x="160" y="118" fontSize="12" fill="#10b981" fontWeight="600">BC = 33 cm (opp)</text>
              
              {/* Vertices */}
              <circle cx="30" cy="150" r="2" fill="#1a1a1a" />
              <circle cx="150" cy="150" r="2" fill="#1a1a1a" />
              <circle cx="150" cy="80" r="2" fill="#1a1a1a" />
              <text x="25" y="165" fontSize="11" fill="#1a1a1a" fontWeight="600">A</text>
              <text x="155" y="165" fontSize="11" fill="#1a1a1a" fontWeight="600">C</text>
              <text x="155" y="75" fontSize="11" fill="#1a1a1a" fontWeight="600">B</text>
              
              {/* Explanation */}
              <text x="100" y="185" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">tan A = opposite / adjacent</text>
              <text x="100" y="197" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">33/56 → opp = 33 cm</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              给定 tan A = 33/56，邻边 = 56 cm<br />
              <span className="text-xs text-accent">求对边 = 33 cm</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 87) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📐 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagram 1: Square-base pyramid */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Square-base pyramid</text>
              
              {/* Square base */}
              <polygon points="50,130 150,130 170,145 30,145" fill="none" stroke="#d97706" strokeWidth="2" />
              <line x1="50" y1="130" x2="30" y2="145" stroke="#d97706" strokeWidth="2" />
              <line x1="150" y1="130" x2="170" y2="145" stroke="#d97706" strokeWidth="2" />
              
              {/* Apex */}
              <circle cx="100" cy="50" r="3" fill="#1a1a1a" />
              <text x="105" y="48" fontSize="11" fill="#1a1a1a" fontWeight="600">V</text>
              
              {/* Edges to apex */}
              <line x1="100" y1="50" x2="50" y2="130" stroke="#10b981" strokeWidth="2" />
              <line x1="100" y1="50" x2="150" y2="130" stroke="#10b981" strokeWidth="2" />
              <line x1="100" y1="50" x2="30" y2="145" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
              <line x1="100" y1="50" x2="170" y2="145" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
              
              {/* Height line */}
              <line x1="100" y1="50" x2="100" y2="137" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,2" />
              <text x="110" y="95" fontSize="11" fill="#8b5cf6" fontWeight="600">h = 4 cm</text>
              
              {/* Base labels */}
              <text x="100" y="155" fontSize="11" fill="#d97706" fontWeight="600" textAnchor="middle">6 cm × 6 cm</text>
              
              {/* Formula */}
              <text x="100" y="175" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">V = (1/3) × 36 × 4</text>
              <text x="100" y="187" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">= 48 cm³</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              正方形底棱锥<br />
              <span className="text-xs text-accent">底面积 36 cm², 高 4 cm</span>
            </p>
          </div>

          {/* Diagram 2: Cone */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Cone</text>
              
              {/* Base ellipse */}
              <ellipse cx="100" cy="140" rx="50" ry="15" fill="none" stroke="#d97706" strokeWidth="2" />
              
              {/* Apex */}
              <circle cx="100" cy="50" r="3" fill="#1a1a1a" />
              <text x="105" y="48" fontSize="11" fill="#1a1a1a" fontWeight="600">V</text>
              
              {/* Slant edges */}
              <line x1="100" y1="50" x2="50" y2="140" stroke="#10b981" strokeWidth="2" />
              <line x1="100" y1="50" x2="150" y2="140" stroke="#10b981" strokeWidth="2" />
              
              {/* Height line */}
              <line x1="100" y1="50" x2="100" y2="140" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,2" />
              <text x="110" y="95" fontSize="11" fill="#8b5cf6" fontWeight="600">h = 9 cm</text>
              
              {/* Radius */}
              <line x1="100" y1="140" x2="150" y2="140" stroke="#d97706" strokeWidth="2" />
              <text x="125" y="135" fontSize="11" fill="#d97706" fontWeight="600">r = 7 cm</text>
              
              {/* Formula */}
              <text x="100" y="170" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">V = (1/3)πr²h, π = 22/7</text>
              <text x="100" y="182" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">V = (1/3) × (22/7) × 49 × 9</text>
              <text x="100" y="194" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">= 462 cm³</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              圆锥<br />
              <span className="text-xs text-accent">半径 7 cm, 高 9 cm</span>
            </p>
          </div>

          {/* Diagram 3: Sphere */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[200px] h-auto">
              {/* Title */}
              <text x="100" y="18" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Sphere</text>
              
              {/* Sphere circle */}
              <circle cx="100" cy="95" r="55" fill="none" stroke="#d97706" strokeWidth="2" />
              
              {/* Equator ellipse */}
              <ellipse cx="100" cy="95" rx="55" ry="15" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,3" />
              
              {/* Center */}
              <circle cx="100" cy="95" r="2" fill="#1a1a1a" />
              <text x="105" y="93" fontSize="10" fill="#1a1a1a" fontWeight="600">O</text>
              
              {/* Radius */}
              <line x1="100" y1="95" x2="155" y2="95" stroke="#8b5cf6" strokeWidth="2" />
              <text x="127" y="90" fontSize="11" fill="#8b5cf6" fontWeight="600">r = 7 cm</text>
              
              {/* Formulas */}
              <text x="100" y="170" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">V = (4/3)πr³ = (4/3)π × 343</text>
              <text x="100" y="182" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">= 1372π/3 cm³</text>
              <text x="100" y="194" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">SA = 4πr² = 196π cm²</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-2 font-semibold">
              球体<br />
              <span className="text-xs text-accent">半径 7 cm (in terms of π)</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 92) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Diagram 1: Possibility diagram for two coins */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 300 300" className="w-full max-w-[300px] h-auto">
              {/* Title */}
              <text x="150" y="20" fontSize="12" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Possibility Diagram: Two Coins</text>
              
              {/* Axes */}
              <line x1="50" y1="250" x2="270" y2="250" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="50" y1="250" x2="50" y2="50" stroke="#1a1a1a" strokeWidth="2" />
              
              {/* Axis labels */}
              <text x="150" y="280" fontSize="12" fill="#1a1a1a" fontWeight="600" textAnchor="middle">First Coin</text>
              <text x="20" y="150" fontSize="12" fill="#1a1a1a" fontWeight="600" textAnchor="middle" transform="rotate(-90 20 150)">Second Coin</text>
              
              {/* X-axis labels */}
              <text x="120" y="268" fontSize="11" fill="#1a1a1a" textAnchor="middle">H</text>
              <text x="200" y="268" fontSize="11" fill="#1a1a1a" textAnchor="middle">T</text>
              
              {/* Y-axis labels */}
              <text x="35" y="110" fontSize="11" fill="#1a1a1a" textAnchor="end">H</text>
              <text x="35" y="190" fontSize="11" fill="#1a1a1a" textAnchor="end">T</text>
              
              {/* Grid lines */}
              <line x1="50" y1="100" x2="270" y2="100" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="50" y1="180" x2="270" y2="180" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="120" y1="250" x2="120" y2="50" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="200" y1="250" x2="200" y2="50" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3" />
              
              {/* Points */}
              <circle cx="120" cy="100" r="5" fill="#d97706" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="120" y="92" fontSize="10" fill="#d97706" fontWeight="600" textAnchor="middle">HH</text>
              
              <circle cx="200" cy="100" r="5" fill="#10b981" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="200" y="92" fontSize="10" fill="#10b981" fontWeight="600" textAnchor="middle">TH</text>
              
              <circle cx="120" cy="180" r="5" fill="#10b981" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="120" y="172" fontSize="10" fill="#10b981" fontWeight="600" textAnchor="middle">HT</text>
              
              <circle cx="200" cy="180" r="5" fill="#3b82f6" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="200" y="172" fontSize="10" fill="#3b82f6" fontWeight="600" textAnchor="middle">TT</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-3">
              <span className="font-semibold">可能性图：两硬币</span><br />
              <span className="text-accent">4 个同样可能的结果</span><br />
              <span className="text-xs text-muted">HH, HT, TH, TT（不要忘记 HT 和 TH）</span>
            </p>
          </div>

          {/* Diagram 2: Tree diagram for coin then die */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 300 300" className="w-full max-w-[300px] h-auto">
              {/* Title */}
              <text x="150" y="20" fontSize="12" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Tree Diagram: Coin then Die</text>
              
              {/* Start */}
              <circle cx="150" cy="50" r="4" fill="#1a1a1a" />
              
              {/* First branches (coin) */}
              <line x1="150" y1="50" x2="80" y2="90" stroke="#d97706" strokeWidth="2" />
              <line x1="150" y1="50" x2="220" y2="90" stroke="#10b981" strokeWidth="2" />
              
              {/* First branch labels */}
              <text x="100" y="70" fontSize="11" fill="#d97706" fontWeight="600">H</text>
              <text x="190" y="70" fontSize="11" fill="#10b981" fontWeight="600">T</text>
              
              {/* Second level circles */}
              <circle cx="80" cy="90" r="3" fill="#d97706" />
              <circle cx="220" cy="90" r="3" fill="#10b981" />
              
              {/* Second branches from H (die outcomes 1,2,3) */}
              <line x1="80" y1="90" x2="40" y2="150" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="80" y1="90" x2="60" y2="150" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="80" y1="90" x2="80" y2="150" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="80" y1="90" x2="100" y2="150" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="80" y1="90" x2="120" y2="150" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="80" y1="90" x2="140" y2="150" stroke="#6b7280" strokeWidth="1.5" />
              
              {/* Second branches from T (die outcomes 1,2,3) */}
              <line x1="220" y1="90" x2="160" y2="150" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="220" y1="90" x2="180" y2="150" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="220" y1="90" x2="200" y2="150" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="220" y1="90" x2="220" y2="150" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="220" y1="90" x2="240" y2="150" stroke="#6b7280" strokeWidth="1.5" />
              <line x1="220" y1="90" x2="260" y2="150" stroke="#6b7280" strokeWidth="1.5" />
              
              {/* Die number labels for H branch */}
              <text x="40" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">1</text>
              <text x="60" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">2</text>
              <text x="80" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">3</text>
              <text x="100" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">4</text>
              <text x="120" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">5</text>
              <text x="140" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">6</text>
              
              {/* Die number labels for T branch */}
              <text x="160" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">1</text>
              <text x="180" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">2</text>
              <text x="200" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">3</text>
              <text x="220" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">4</text>
              <text x="240" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">5</text>
              <text x="260" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">6</text>
              
              {/* Outcomes list */}
              <text x="150" y="190" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">Outcomes: H1, H2, H3, H4, H5, H6,</text>
              <text x="150" y="202" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">T1, T2, T3, T4, T5, T6</text>
              <text x="150" y="220" fontSize="10" fill="#d97706" fontWeight="700" textAnchor="middle">Total: 12 equally likely outcomes</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-3">
              <span className="font-semibold">树状图：硬币再骰子</span><br />
              <span className="text-accent">12 个同样可能的结果</span><br />
              <span className="text-xs text-muted">H1, H2, H3, H4, H5, H6, T1, T2, T3, T4, T5, T6</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 93) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Diagram 1: Tree diagram for independent events (two coin flips with replacement) */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 300 280" className="w-full max-w-[300px] h-auto">
              {/* Title */}
              <text x="150" y="20" fontSize="12" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Independent Events: Two Coin Flips</text>
              
              {/* Start */}
              <circle cx="150" cy="50" r="4" fill="#1a1a1a" />
              <text x="150" y="40" fontSize="10" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Start</text>
              
              {/* First branches */}
              <line x1="150" y1="50" x2="90" y2="100" stroke="#d97706" strokeWidth="2.5" />
              <line x1="150" y1="50" x2="210" y2="100" stroke="#10b981" strokeWidth="2.5" />
              
              {/* First branch labels */}
              <text x="110" y="70" fontSize="11" fill="#d97706" fontWeight="700">H (1/2)</text>
              <text x="180" y="70" fontSize="11" fill="#10b981" fontWeight="700">T (1/2)</text>
              
              {/* Second level circles */}
              <circle cx="90" cy="100" r="4" fill="#d97706" />
              <circle cx="210" cy="100" r="4" fill="#10b981" />
              
              {/* Second branches from H */}
              <line x1="90" y1="100" x2="60" y2="150" stroke="#d97706" strokeWidth="2" />
              <line x1="90" y1="100" x2="120" y2="150" stroke="#10b981" strokeWidth="2" />
              
              {/* Second branches from T */}
              <line x1="210" y1="100" x2="180" y2="150" stroke="#d97706" strokeWidth="2" />
              <line x1="210" y1="100" x2="240" y2="150" stroke="#10b981" strokeWidth="2" />
              
              {/* Second branch labels */}
              <text x="55" y="125" fontSize="10" fill="#d97706" fontWeight="600">H (1/2)</text>
              <text x="115" y="125" fontSize="10" fill="#10b981" fontWeight="600">T (1/2)</text>
              <text x="175" y="125" fontSize="10" fill="#d97706" fontWeight="600">H (1/2)</text>
              <text x="235" y="125" fontSize="10" fill="#10b981" fontWeight="600">T (1/2)</text>
              
              {/* Outcomes */}
              <circle cx="60" cy="150" r="5" fill="#d97706" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="60" y="170" fontSize="10" fill="#d97706" fontWeight="700" textAnchor="middle">HH</text>
              <text x="60" y="183" fontSize="8" fill="#6b7280" fontWeight="600" textAnchor="middle">1/2 × 1/2</text>
              <text x="60" y="195" fontSize="9" fill="#3b82f6" fontWeight="700" textAnchor="middle">= 1/4</text>
              
              <circle cx="120" cy="150" r="5" fill="#10b981" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="120" y="170" fontSize="10" fill="#10b981" fontWeight="700" textAnchor="middle">HT</text>
              <text x="120" y="183" fontSize="8" fill="#6b7280" fontWeight="600" textAnchor="middle">1/2 × 1/2</text>
              <text x="120" y="195" fontSize="9" fill="#3b82f6" fontWeight="700" textAnchor="middle">= 1/4</text>
              
              <circle cx="180" cy="150" r="5" fill="#10b981" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="180" y="170" fontSize="10" fill="#10b981" fontWeight="700" textAnchor="middle">TH</text>
              <text x="180" y="183" fontSize="8" fill="#6b7280" fontWeight="600" textAnchor="middle">1/2 × 1/2</text>
              <text x="180" y="195" fontSize="9" fill="#3b82f6" fontWeight="700" textAnchor="middle">= 1/4</text>
              
              <circle cx="240" cy="150" r="5" fill="#3b82f6" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="240" y="170" fontSize="10" fill="#3b82f6" fontWeight="700" textAnchor="middle">TT</text>
              <text x="240" y="183" fontSize="8" fill="#6b7280" fontWeight="600" textAnchor="middle">1/2 × 1/2</text>
              <text x="240" y="195" fontSize="9" fill="#3b82f6" fontWeight="700" textAnchor="middle">= 1/4</text>
              
              {/* Formula */}
              <text x="150" y="225" fontSize="10" fill="#8b5cf6" fontWeight="700" textAnchor="middle">独立事件：P(A and B) = P(A) × P(B)</text>
              <text x="150" y="240" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">First flip does not affect second flip</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-3">
              <span className="font-semibold">独立事件树状图：两次硬币</span><br />
              <span className="text-accent">P(A and B) = P(A) × P(B)</span><br />
              <span className="text-xs text-muted">第一次不影响第二次，用乘法</span>
            </p>
          </div>

          {/* Diagram 2: Mutually exclusive events on a die */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 300 280" className="w-full max-w-[300px] h-auto">
              {/* Title */}
              <text x="150" y="20" fontSize="12" fill="#1a1a1a" fontWeight="600" textAnchor="middle">Mutually Exclusive Events: Die Roll</text>
              
              {/* Die outline */}
              <rect x="75" y="50" width="150" height="150" rx="8" fill="#f9fafb" stroke="#1a1a1a" strokeWidth="2" />
              
              {/* Even numbers (left side) */}
              <rect x="85" y="65" width="60" height="120" rx="5" fill="#d97706" fillOpacity="0.2" stroke="#d97706" strokeWidth="2" />
              <text x="115" y="85" fontSize="13" fill="#d97706" fontWeight="700" textAnchor="middle">Even</text>
              <text x="115" y="105" fontSize="18" fill="#d97706" fontWeight="700" textAnchor="middle">2</text>
              <text x="115" y="130" fontSize="18" fill="#d97706" fontWeight="700" textAnchor="middle">4</text>
              <text x="115" y="155" fontSize="18" fill="#d97706" fontWeight="700" textAnchor="middle">6</text>
              <text x="115" y="175" fontSize="10" fill="#d97706" fontWeight="600" textAnchor="middle">P(A) = 3/6</text>
              
              {/* Odd numbers (right side) */}
              <rect x="155" y="65" width="60" height="120" rx="5" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
              <text x="185" y="85" fontSize="13" fill="#10b981" fontWeight="700" textAnchor="middle">Odd</text>
              <text x="185" y="105" fontSize="18" fill="#10b981" fontWeight="700" textAnchor="middle">1</text>
              <text x="185" y="130" fontSize="18" fill="#10b981" fontWeight="700" textAnchor="middle">3</text>
              <text x="185" y="155" fontSize="18" fill="#10b981" fontWeight="700" textAnchor="middle">5</text>
              <text x="185" y="175" fontSize="10" fill="#10b981" fontWeight="600" textAnchor="middle">P(B) = 3/6</text>
              
              {/* X mark between sections */}
              <line x1="145" y1="80" x2="155" y2="90" stroke="#ef4444" strokeWidth="3" />
              <line x1="155" y1="80" x2="145" y2="90" stroke="#ef4444" strokeWidth="3" />
              <text x="150" y="110" fontSize="9" fill="#ef4444" fontWeight="700" textAnchor="middle">不能</text>
              <text x="150" y="120" fontSize="9" fill="#ef4444" fontWeight="700" textAnchor="middle">同时</text>
              <text x="150" y="130" fontSize="9" fill="#ef4444" fontWeight="700" textAnchor="middle">发生</text>
              
              {/* Formula */}
              <text x="150" y="225" fontSize="10" fill="#8b5cf6" fontWeight="700" textAnchor="middle">互斥事件：P(A or B) = P(A) + P(B)</text>
              <text x="150" y="240" fontSize="10" fill="#3b82f6" fontWeight="700" textAnchor="middle">P(even or odd) = 3/6 + 3/6 = 1</text>
              <text x="150" y="255" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">Cannot happen together, use addition</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-3">
              <span className="font-semibold">互斥事件：骰子偶数或奇数</span><br />
              <span className="text-accent">P(A or B) = P(A) + P(B)</span><br />
              <span className="text-xs text-muted">不能同时发生，用加法</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 94) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="max-w-4xl mx-auto">
          {/* Frequency table with calculation */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 520 360" className="w-full max-w-[520px] h-auto">
              {/* Title */}
              <text x="260" y="20" fontSize="13" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Grouped Data Mean: Frequency Table</text>
              <text x="260" y="36" fontSize="11" fill="#6b7280" fontWeight="600" textAnchor="middle">Test scores of 20 students (分组数据平均数：20 个学生的测试成绩)</text>
              
              {/* Table headers */}
              <rect x="40" y="55" width="120" height="30" fill="#8b5cf6" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="100" y="75" fontSize="11" fill="white" fontWeight="700" textAnchor="middle">Score (分数)</text>
              
              <rect x="160" y="55" width="90" height="30" fill="#8b5cf6" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="205" y="68" fontSize="10" fill="white" fontWeight="700" textAnchor="middle">Frequency</text>
              <text x="205" y="80" fontSize="10" fill="white" fontWeight="700" textAnchor="middle">(f)</text>
              
              <rect x="250" y="55" width="90" height="30" fill="#d97706" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="295" y="68" fontSize="10" fill="white" fontWeight="700" textAnchor="middle">Midpoint</text>
              <text x="295" y="80" fontSize="10" fill="white" fontWeight="700" textAnchor="middle">(组中值)</text>
              
              <rect x="340" y="55" width="140" height="30" fill="#10b981" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="410" y="68" fontSize="10" fill="white" fontWeight="700" textAnchor="middle">fx (midpoint × f)</text>
              <text x="410" y="80" fontSize="10" fill="white" fontWeight="700" textAnchor="middle">(组中值 × 频数)</text>
              
              {/* Row 1: 10-19 */}
              <rect x="40" y="85" width="120" height="28" fill="#f9fafb" stroke="#1a1a1a" strokeWidth="1" />
              <text x="100" y="103" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">10–19</text>
              
              <rect x="160" y="85" width="90" height="28" fill="#f9fafb" stroke="#1a1a1a" strokeWidth="1" />
              <text x="205" y="103" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">3</text>
              
              <rect x="250" y="85" width="90" height="28" fill="#fef3c7" stroke="#1a1a1a" strokeWidth="1" />
              <text x="295" y="103" fontSize="11" fill="#d97706" fontWeight="700" textAnchor="middle">14.5</text>
              
              <rect x="340" y="85" width="140" height="28" fill="#d1fae5" stroke="#1a1a1a" strokeWidth="1" />
              <text x="410" y="103" fontSize="11" fill="#10b981" fontWeight="700" textAnchor="middle">14.5 × 3 = 43.5</text>
              
              {/* Row 2: 20-29 */}
              <rect x="40" y="113" width="120" height="28" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1" />
              <text x="100" y="131" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">20–29</text>
              
              <rect x="160" y="113" width="90" height="28" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1" />
              <text x="205" y="131" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">5</text>
              
              <rect x="250" y="113" width="90" height="28" fill="#fef3c7" stroke="#1a1a1a" strokeWidth="1" />
              <text x="295" y="131" fontSize="11" fill="#d97706" fontWeight="700" textAnchor="middle">24.5</text>
              
              <rect x="340" y="113" width="140" height="28" fill="#d1fae5" stroke="#1a1a1a" strokeWidth="1" />
              <text x="410" y="131" fontSize="11" fill="#10b981" fontWeight="700" textAnchor="middle">24.5 × 5 = 122.5</text>
              
              {/* Row 3: 30-39 */}
              <rect x="40" y="141" width="120" height="28" fill="#f9fafb" stroke="#1a1a1a" strokeWidth="1" />
              <text x="100" y="159" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">30–39</text>
              
              <rect x="160" y="141" width="90" height="28" fill="#f9fafb" stroke="#1a1a1a" strokeWidth="1" />
              <text x="205" y="159" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">8</text>
              
              <rect x="250" y="141" width="90" height="28" fill="#fef3c7" stroke="#1a1a1a" strokeWidth="1" />
              <text x="295" y="159" fontSize="11" fill="#d97706" fontWeight="700" textAnchor="middle">34.5</text>
              
              <rect x="340" y="141" width="140" height="28" fill="#d1fae5" stroke="#1a1a1a" strokeWidth="1" />
              <text x="410" y="159" fontSize="11" fill="#10b981" fontWeight="700" textAnchor="middle">34.5 × 8 = 276</text>
              
              {/* Row 4: 40-49 */}
              <rect x="40" y="169" width="120" height="28" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1" />
              <text x="100" y="187" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">40–49</text>
              
              <rect x="160" y="169" width="90" height="28" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1" />
              <text x="205" y="187" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">4</text>
              
              <rect x="250" y="169" width="90" height="28" fill="#fef3c7" stroke="#1a1a1a" strokeWidth="1" />
              <text x="295" y="187" fontSize="11" fill="#d97706" fontWeight="700" textAnchor="middle">44.5</text>
              
              <rect x="340" y="169" width="140" height="28" fill="#d1fae5" stroke="#1a1a1a" strokeWidth="1" />
              <text x="410" y="187" fontSize="11" fill="#10b981" fontWeight="700" textAnchor="middle">44.5 × 4 = 178</text>
              
              {/* Total row */}
              <rect x="40" y="197" width="120" height="32" fill="#e0e7ff" stroke="#1a1a1a" strokeWidth="2" />
              <text x="100" y="217" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Total (总计)</text>
              
              <rect x="160" y="197" width="90" height="32" fill="#dbeafe" stroke="#1a1a1a" strokeWidth="2" />
              <text x="205" y="210" fontSize="10" fill="#3b82f6" fontWeight="700" textAnchor="middle">Σf = 20</text>
              <text x="205" y="222" fontSize="8" fill="#6b7280" fontWeight="600" textAnchor="middle">(总频数)</text>
              
              <rect x="250" y="197" width="90" height="32" fill="#fef3c7" stroke="#1a1a1a" strokeWidth="2" />
              <text x="295" y="217" fontSize="10" fill="#6b7280" fontWeight="600" textAnchor="middle">—</text>
              
              <rect x="340" y="197" width="140" height="32" fill="#d1fae5" stroke="#1a1a1a" strokeWidth="2" />
              <text x="410" y="210" fontSize="10" fill="#10b981" fontWeight="700" textAnchor="middle">Σfx = 620</text>
              <text x="410" y="222" fontSize="8" fill="#6b7280" fontWeight="600" textAnchor="middle">(总和)</text>
              
              {/* Calculation steps */}
              <text x="260" y="252" fontSize="12" fill="#8b5cf6" fontWeight="700" textAnchor="middle">Step 1: Find midpoint (组中值) = (lower + upper) / 2</text>
              <text x="260" y="268" fontSize="11" fill="#6b7280" fontWeight="600" textAnchor="middle">Example: Class 10–19, midpoint = (10 + 19) / 2 = 14.5</text>
              
              <text x="260" y="290" fontSize="12" fill="#8b5cf6" fontWeight="700" textAnchor="middle">Step 2: Calculate fx for each class (每组算 fx)</text>
              <text x="260" y="306" fontSize="11" fill="#6b7280" fontWeight="600" textAnchor="middle">Example: fx = 14.5 × 3 = 43.5, then sum all fx to get Σfx</text>
              
              <text x="260" y="328" fontSize="13" fill="#ef4444" fontWeight="700" textAnchor="middle">Step 3: Mean = Σfx / Σf = 620 / 20 = 31</text>
              <text x="260" y="344" fontSize="10" fill="#6b7280" fontWeight="600" textAnchor="middle">Estimated mean of test scores (估计平均分)</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-4">
              <span className="font-semibold">分组数据平均数计算表</span><br />
              <span className="text-accent">Mean = Σfx / Σf = 620 / 20 = 31</span><br />
              <span className="text-xs text-muted">用组中值代表该组，算 Σ(组中值 × 频数) ÷ 总频数</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 95) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 600 320" className="w-full max-w-[600px] h-auto">
              {/* Title */}
              <text x="300" y="20" fontSize="13" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Quartiles and Percentiles: Ordered Data</text>
              <text x="300" y="36" fontSize="11" fill="#6b7280" fontWeight="600" textAnchor="middle">Data set (7 values): 12, 15, 18, 20, 23, 25, 28 (四分位数和百分位数)</text>
              
              {/* Ordered list boxes */}
              <rect x="60" y="60" width="60" height="40" fill="#f9fafb" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="90" y="85" fontSize="14" fill="#1a1a1a" fontWeight="700" textAnchor="middle">12</text>
              
              <rect x="130" y="60" width="60" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="160" y="85" fontSize="14" fill="#3b82f6" fontWeight="700" textAnchor="middle">15</text>
              
              <rect x="200" y="60" width="60" height="40" fill="#f9fafb" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="230" y="85" fontSize="14" fill="#1a1a1a" fontWeight="700" textAnchor="middle">18</text>
              
              <rect x="270" y="60" width="60" height="40" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
              <text x="300" y="85" fontSize="14" fill="#d97706" fontWeight="700" textAnchor="middle">20</text>
              
              <rect x="340" y="60" width="60" height="40" fill="#f9fafb" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="370" y="85" fontSize="14" fill="#1a1a1a" fontWeight="700" textAnchor="middle">23</text>
              
              <rect x="410" y="60" width="60" height="40" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
              <text x="440" y="85" fontSize="14" fill="#10b981" fontWeight="700" textAnchor="middle">25</text>
              
              <rect x="480" y="60" width="60" height="40" fill="#f9fafb" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="510" y="85" fontSize="14" fill="#1a1a1a" fontWeight="700" textAnchor="middle">28</text>
              
              {/* Q1 label */}
              <line x1="160" y1="110" x2="160" y2="130" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="160" cy="135" r="3" fill="#3b82f6" />
              <text x="160" y="152" fontSize="12" fill="#3b82f6" fontWeight="700" textAnchor="middle">Q1 = 15</text>
              <text x="160" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">(median of lower half)</text>
              
              {/* Q2 label */}
              <line x1="300" y1="110" x2="300" y2="130" stroke="#d97706" strokeWidth="2.5" />
              <circle cx="300" cy="135" r="4" fill="#d97706" />
              <text x="300" y="152" fontSize="12" fill="#d97706" fontWeight="700" textAnchor="middle">Q2 = 20</text>
              <text x="300" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">(median, 50th percentile)</text>
              
              {/* Q3 label */}
              <line x1="440" y1="110" x2="440" y2="130" stroke="#10b981" strokeWidth="2" />
              <circle cx="440" cy="135" r="3" fill="#10b981" />
              <text x="440" y="152" fontSize="12" fill="#10b981" fontWeight="700" textAnchor="middle">Q3 = 25</text>
              <text x="440" y="165" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">(median of upper half)</text>
              
              {/* Step-by-step guide */}
              <rect x="40" y="190" width="520" height="115" fill="#f9fafb" stroke="#8b5cf6" strokeWidth="1.5" rx="8" />
              
              <text x="300" y="210" fontSize="12" fill="#8b5cf6" fontWeight="700" textAnchor="middle">Step-by-step: Finding Quartiles (四分位数步骤)</text>
              
              <text x="50" y="230" fontSize="10" fill="#1a1a1a" fontWeight="600">① Order data: 12, 15, 18, 20, 23, 25, 28 (7 values)</text>
              
              <text x="50" y="248" fontSize="10" fill="#d97706" fontWeight="700">② Q2 (median) = 20 (4th value, middle of 7)</text>
              <text x="360" y="248" fontSize="9" fill="#6b7280" fontWeight="600">(50th percentile)</text>
              
              <text x="50" y="266" fontSize="10" fill="#3b82f6" fontWeight="700">③ Lower half (below Q2): (12, 15, 18) → Q1 = 15</text>
              <text x="350" y="266" fontSize="9" fill="#6b7280" fontWeight="600">(25th percentile)</text>
              
              <text x="50" y="284" fontSize="10" fill="#10b981" fontWeight="700">④ Upper half (above Q2): (23, 25, 28) → Q3 = 25</text>
              <text x="350" y="284" fontSize="9" fill="#6b7280" fontWeight="600">(75th percentile)</text>
              
              <text x="300" y="300" fontSize="9" fill="#ef4444" fontWeight="700" textAnchor="middle">Fossil: Q1 ≠ first value (12); Q3 ≠ last value (28). Order first!</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-4">
              <span className="font-semibold">四分位数图解：有序数据列表</span><br />
              <span className="text-accent">Q1 = 15 (下半部分中位数), Q2 = 20 (中位数), Q3 = 25 (上半部分中位数)</span><br />
              <span className="text-xs text-muted">先排序，再找 Q2 (median)，再找 Q1 (下半) 和 Q3 (上半)</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 96) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 600 340" className="w-full max-w-[600px] h-auto">
              {/* Title */}
              <text x="300" y="20" fontSize="13" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Measures of Spread: Range and IQR</text>
              <text x="300" y="36" fontSize="11" fill="#6b7280" fontWeight="600" textAnchor="middle">Data set (7 values): 10, 15, 18, 20, 22, 25, 30 (离散程度：极差和四分位距)</text>
              
              {/* Number line */}
              <line x1="80" y1="80" x2="520" y2="80" stroke="#1a1a1a" strokeWidth="2" />
              
              {/* Tick marks for data points */}
              <line x1="80" y1="75" x2="80" y2="85" stroke="#1a1a1a" strokeWidth="2" />
              <circle cx="80" cy="80" r="5" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
              <text x="80" y="102" fontSize="11" fill="#ef4444" fontWeight="700" textAnchor="middle">10</text>
              <text x="80" y="115" fontSize="8" fill="#6b7280" fontWeight="600" textAnchor="middle">(min)</text>
              
              <line x1="153" y1="75" x2="153" y2="85" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="153" cy="80" r="5" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
              <text x="153" y="102" fontSize="11" fill="#3b82f6" fontWeight="700" textAnchor="middle">15</text>
              <text x="153" y="115" fontSize="8" fill="#6b7280" fontWeight="600" textAnchor="middle">(Q1)</text>
              
              <line x1="197" y1="75" x2="197" y2="85" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="197" cy="80" r="4" fill="#f9fafb" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="197" y="102" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">18</text>
              
              <line x1="241" y1="75" x2="241" y2="85" stroke="#d97706" strokeWidth="2" />
              <circle cx="241" cy="80" r="5" fill="#d97706" stroke="#b45309" strokeWidth="2" />
              <text x="241" y="102" fontSize="11" fill="#d97706" fontWeight="700" textAnchor="middle">20</text>
              <text x="241" y="115" fontSize="8" fill="#6b7280" fontWeight="600" textAnchor="middle">(Q2)</text>
              
              <line x="285" y1="75" x2="285" y2="85" stroke="#1a1a1a" strokeWidth="1.5" />
              <circle cx="285" cy="80" r="4" fill="#f9fafb" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="285" y="102" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">22</text>
              
              <line x1="373" y1="75" x2="373" y2="85" stroke="#10b981" strokeWidth="2" />
              <circle cx="373" cy="80" r="5" fill="#10b981" stroke="#059669" strokeWidth="2" />
              <text x="373" y="102" fontSize="11" fill="#10b981" fontWeight="700" textAnchor="middle">25</text>
              <text x="373" y="115" fontSize="8" fill="#6b7280" fontWeight="600" textAnchor="middle">(Q3)</text>
              
              <line x1="520" y1="75" x2="520" y2="85" stroke="#1a1a1a" strokeWidth="2" />
              <circle cx="520" cy="80" r="5" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
              <text x="520" y="102" fontSize="11" fill="#ef4444" fontWeight="700" textAnchor="middle">30</text>
              <text x="520" y="115" fontSize="8" fill="#6b7280" fontWeight="600" textAnchor="middle">(max)</text>
              
              {/* Range bracket */}
              <line x1="80" y1="140" x2="520" y2="140" stroke="#ef4444" strokeWidth="2" />
              <line x1="80" y1="135" x2="80" y2="145" stroke="#ef4444" strokeWidth="2" />
              <line x1="520" y1="135" x2="520" y2="145" stroke="#ef4444" strokeWidth="2" />
              <text x="300" y="158" fontSize="11" fill="#ef4444" fontWeight="700" textAnchor="middle">Range = max − min = 30 − 10 = 20</text>
              <text x="300" y="173" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">(极差：受极端值影响)</text>
              
              {/* IQR bracket */}
              <line x1="153" y1="195" x2="373" y2="195" stroke="#8b5cf6" strokeWidth="2.5" />
              <line x1="153" y1="190" x2="153" y2="200" stroke="#8b5cf6" strokeWidth="2.5" />
              <line x1="373" y1="190" x2="373" y2="200" stroke="#8b5cf6" strokeWidth="2.5" />
              <text x="263" y="213" fontSize="11" fill="#8b5cf6" fontWeight="700" textAnchor="middle">IQR = Q3 − Q1 = 25 − 15 = 10</text>
              <text x="263" y="228" fontSize="9" fill="#6b7280" fontWeight="600" textAnchor="middle">(四分位距：不受极端值影响)</text>
              
              {/* Step-by-step guide */}
              <rect x="40" y="250" width="520" height="75" fill="#f9fafb" stroke="#8b5cf6" strokeWidth="1.5" rx="8" />
              
              <text x="300" y="268" fontSize="11" fill="#8b5cf6" fontWeight="700" textAnchor="middle">Measures of Spread (离散程度步骤)</text>
              
              <text x="50" y="286" fontSize="10" fill="#ef4444" fontWeight="700">Range = largest − smallest = 30 − 10 = 20</text>
              <text x="390" y="286" fontSize="9" fill="#6b7280" fontWeight="600">(极差 = 最大 − 最小)</text>
              
              <text x="50" y="303" fontSize="10" fill="#8b5cf6" fontWeight="700">IQR = Q3 − Q1 = 25 − 15 = 10</text>
              <text x="280" y="303" fontSize="9" fill="#6b7280" fontWeight="600">(四分位距 = Q3 − Q1, 用 W95 方法找 Q1, Q3)</text>
              
              <text x="300" y="319" fontSize="9" fill="#ef4444" fontWeight="700" textAnchor="middle">Fossil: Range ≠ 10 − 30 (backwards); IQR ≠ 15 − 25 (Q1−Q3) or 25 + 15 (Q3+Q1); IQR ≠ 30 (one extreme)</text>
            </svg>
            <p className="text-sm text-ink-2 text-center mt-4">
              <span className="font-semibold">离散程度图解：数轴展示 Range 和 IQR</span><br />
              <span className="text-accent">Range = 20 (极差，受极端值影响), IQR = 10 (四分位距，不受极端值影响)</span><br />
              <span className="text-xs text-muted">更大的 range / IQR / 标准差表示更分散。本周不画箱线图（S1.13）。</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 97) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-8">
            {/* Box-and-whisker plot */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 600 280" className="w-full max-w-[600px] h-auto">
                {/* Title */}
                <text x="300" y="20" fontSize="13" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Box-and-Whisker Plot (箱线图)</text>
                <text x="300" y="36" fontSize="11" fill="#6b7280" fontWeight="600" textAnchor="middle">Data: 10, 15, 18, 20, 22, 25, 30. Five-number summary: min=10, Q1=15, Q2=20, Q3=25, max=30</text>
                
                {/* Number line */}
                <line x1="80" y1="100" x2="520" y2="100" stroke="#1a1a1a" strokeWidth="2" />
                
                {/* Tick marks */}
                <line x1="80" y1="95" x2="80" y2="105" stroke="#1a1a1a" strokeWidth="2" />
                <text x="80" y="120" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">10</text>
                
                <line x1="153" y1="95" x2="153" y2="105" stroke="#1a1a1a" strokeWidth="2" />
                <text x="153" y="120" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">15</text>
                
                <line x1="241" y1="95" x2="241" y2="105" stroke="#1a1a1a" strokeWidth="2" />
                <text x="241" y="120" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">20</text>
                
                <line x1="373" y1="95" x2="373" y2="105" stroke="#1a1a1a" strokeWidth="2" />
                <text x="373" y="120" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">25</text>
                
                <line x1="520" y1="95" x2="520" y2="105" stroke="#1a1a1a" strokeWidth="2" />
                <text x="520" y="120" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">30</text>
                
                {/* Box (Q1 to Q3) */}
                <rect x="153" y="65" width="220" height="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2.5" />
                
                {/* Median line (Q2) */}
                <line x1="241" y1="65" x2="241" y2="95" stroke="#d97706" strokeWidth="3" />
                
                {/* Left whisker (min to Q1) */}
                <line x1="80" y1="80" x2="153" y2="80" stroke="#3b82f6" strokeWidth="2.5" />
                <line x1="80" y1="75" x2="80" y2="85" stroke="#3b82f6" strokeWidth="2.5" />
                
                {/* Right whisker (Q3 to max) */}
                <line x1="373" y1="80" x2="520" y2="80" stroke="#3b82f6" strokeWidth="2.5" />
                <line x1="520" y1="75" x2="520" y2="85" stroke="#3b82f6" strokeWidth="2.5" />
                
                {/* Labels */}
                <text x="80" y="140" fontSize="10" fill="#ef4444" fontWeight="700" textAnchor="middle">min</text>
                <text x="153" y="140" fontSize="10" fill="#3b82f6" fontWeight="700" textAnchor="middle">Q1</text>
                <text x="241" y="140" fontSize="10" fill="#d97706" fontWeight="700" textAnchor="middle">Q2</text>
                <text x="373" y="140" fontSize="10" fill="#10b981" fontWeight="700" textAnchor="middle">Q3</text>
                <text x="520" y="140" fontSize="10" fill="#ef4444" fontWeight="700" textAnchor="middle">max</text>
                
                {/* Step guide */}
                <rect x="40" y="160" width="520" height="105" fill="#f9fafb" stroke="#3b82f6" strokeWidth="1.5" rx="8" />
                
                <text x="300" y="178" fontSize="11" fill="#3b82f6" fontWeight="700" textAnchor="middle">Box-and-Whisker Plot Steps (箱线图步骤)</text>
                
                <text x="50" y="196" fontSize="10" fill="#1a1a1a" fontWeight="700">Five-number summary: min=10, Q1=15, Q2=20, Q3=25, max=30</text>
                <text x="50" y="213" fontSize="10" fill="#3b82f6" fontWeight="700">Box: from Q1 (15) to Q3 (25), with a line at Q2 (20)</text>
                <text x="430" y="213" fontSize="9" fill="#6b7280" fontWeight="600">(箱子从 Q1 到 Q3)</text>
                <text x="50" y="230" fontSize="10" fill="#3b82f6" fontWeight="700">Whiskers: left from min (10) to Q1 (15), right from Q3 (25) to max (30)</text>
                <text x="50" y="247" fontSize="9" fill="#ef4444" fontWeight="700">Fossil: Box from min to max (NO! Box is Q1 to Q3); median at box centre (NO! Q2 by data)</text>
                <text x="50" y="260" fontSize="9" fill="#6b7280" fontWeight="600">错误：箱子从最小到最大（应从 Q1 到 Q3）；中位数在箱子正中（Q2 由数据决定，不是 (Q1+Q3)/2）</text>
              </svg>
              <p className="text-sm text-ink-2 text-center mt-4">
                <span className="font-semibold">箱线图：箱子从 Q1 到 Q3，中间线在 Q2，须从两端延伸到最小和最大</span><br />
                <span className="text-accent">Box from Q1 (15) to Q3 (25), median line at Q2 (20), whiskers to min (10) and max (30)</span>
              </p>
            </div>
            
            {/* Cumulative frequency table */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 600 320" className="w-full max-w-[600px] h-auto">
                {/* Title */}
                <text x="300" y="20" fontSize="13" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Cumulative Frequency Table (累积频率表)</text>
                <text x="300" y="36" fontSize="11" fill="#6b7280" fontWeight="600" textAnchor="middle">Test scores of 30 students (30 名学生的测验分数)</text>
                
                {/* Table header */}
                <rect x="100" y="60" width="200" height="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                <rect x="300" y="60" width="200" height="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                <text x="200" y="82" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Score</text>
                <text x="400" y="82" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Cumulative Frequency</text>
                
                {/* Table rows */}
                <rect x="100" y="95" width="200" height="30" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
                <rect x="300" y="95" width="200" height="30" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="200" y="115" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">≤ 50</text>
                <text x="400" y="115" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">8</text>
                
                <rect x="100" y="125" width="200" height="30" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
                <rect x="300" y="125" width="200" height="30" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="200" y="145" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">≤ 60</text>
                <text x="400" y="145" fontSize="11" fill="#d97706" fontWeight="700" textAnchor="middle">15</text>
                
                <rect x="100" y="155" width="200" height="30" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
                <rect x="300" y="155" width="200" height="30" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="200" y="175" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">≤ 70</text>
                <text x="400" y="175" fontSize="11" fill="#10b981" fontWeight="700" textAnchor="middle">24</text>
                
                <rect x="100" y="185" width="200" height="30" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
                <rect x="300" y="185" width="200" height="30" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="200" y="205" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">≤ 80</text>
                <text x="400" y="205" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">30</text>
                
                {/* Step guide */}
                <rect x="40" y="230" width="520" height="75" fill="#f9fafb" stroke="#10b981" strokeWidth="1.5" rx="8" />
                
                <text x="300" y="248" fontSize="11" fill="#10b981" fontWeight="700" textAnchor="middle">Cumulative Frequency Steps (累积频率步骤)</text>
                
                <text x="50" y="266" fontSize="10" fill="#1a1a1a" fontWeight="700">How many students scored 60 &lt; score ≤ 70?</text>
                <text x="50" y="283" fontSize="10" fill="#10b981" fontWeight="700">Frequency of 60–70 = cumulative at 70 − cumulative at 60 = 24 − 15 = 9 students</text>
                <text x="440" y="283" fontSize="9" fill="#6b7280" fontWeight="600">(减法)</text>
                <text x="50" y="299" fontSize="9" fill="#ef4444" fontWeight="700">Fossil: 24 students (NO! 24 is cumulative, not single-class frequency)</text>
              </svg>
              <p className="text-sm text-ink-2 text-center mt-4">
                <span className="font-semibold">累积频率表：单个区间的频数 = 本区间的累积频率 − 前一区间的累积频率</span><br />
                <span className="text-accent">Frequency of one class = subtract previous cumulative frequency. Example: 60–70 = 24 − 15 = 9</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (weekNumber === 98) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Box plot representation */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 400 180" className="w-full max-w-[400px] h-auto">
              {/* Title */}
              <text x="200" y="20" fontSize="14" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Box-and-Whisker Plot</text>
              
              {/* Number line */}
              <line x1="50" y1="80" x2="350" y2="80" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="50" y1="75" x2="50" y2="85" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="110" y1="75" x2="110" y2="85" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="170" y1="75" x2="170" y2="85" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="230" y1="75" x2="230" y2="85" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="290" y1="75" x2="290" y2="85" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="350" y1="75" x2="350" y2="85" stroke="#1a1a1a" strokeWidth="2" />
              
              {/* Labels */}
              <text x="50" y="100" fontSize="11" fill="#1a1a1a" textAnchor="middle">10</text>
              <text x="110" y="100" fontSize="11" fill="#1a1a1a" textAnchor="middle">12</text>
              <text x="170" y="100" fontSize="11" fill="#1a1a1a" textAnchor="middle">14</text>
              <text x="230" y="100" fontSize="11" fill="#1a1a1a" textAnchor="middle">16</text>
              <text x="290" y="100" fontSize="11" fill="#1a1a1a" textAnchor="middle">18</text>
              <text x="350" y="100" fontSize="11" fill="#1a1a1a" textAnchor="middle">20</text>
              
              {/* Box plot: Data: 10, 12, 13, 14, 15, 16, 18 */}
              {/* Min=10, Q1=12, Q2=14, Q3=16, Max=18 */}
              
              {/* Left whisker (min to Q1) */}
              <line x1="50" y1="60" x2="110" y2="60" stroke="#3b82f6" strokeWidth="2" />
              <line x1="50" y1="55" x2="50" y2="65" stroke="#3b82f6" strokeWidth="2" />
              
              {/* Box (Q1 to Q3) */}
              <rect x="110" y="50" width="120" height="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              
              {/* Median line (Q2) */}
              <line x1="170" y1="50" x2="170" y2="70" stroke="#d97706" strokeWidth="3" />
              
              {/* Right whisker (Q3 to max) */}
              <line x1="230" y1="60" x2="290" y2="60" stroke="#3b82f6" strokeWidth="2" />
              <line x1="290" y1="55" x2="290" y2="65" stroke="#3b82f6" strokeWidth="2" />
              
              {/* Labels */}
              <text x="50" y="45" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">Min=10</text>
              <text x="110" y="40" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">Q1=12</text>
              <text x="170" y="40" fontSize="9" fill="#d97706" fontWeight="700" textAnchor="middle">Q2=14</text>
              <text x="230" y="40" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">Q3=16</text>
              <text x="290" y="45" fontSize="9" fill="#3b82f6" fontWeight="600" textAnchor="middle">Max=18</text>
              
              {/* Advantages */}
              <rect x="30" y="115" width="340" height="60" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" rx="6" />
              <text x="200" y="132" fontSize="10" fill="#10b981" fontWeight="700" textAnchor="middle">Advantage 优势</text>
              <text x="200" y="147" fontSize="9" fill="#1a1a1a" textAnchor="middle">Shows spread (IQR, range) and median quickly</text>
              <text x="200" y="160" fontSize="9" fill="#1a1a1a" textAnchor="middle">快速显示离散程度和中位数</text>
              <text x="200" y="172" fontSize="8" fill="#ef4444" fontWeight="600" textAnchor="middle">Disadvantage: hides individual values (看不到每个数)</text>
            </svg>
          </div>

          {/* Stem-and-leaf representation */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 400 180" className="w-full max-w-[400px] h-auto">
              {/* Title */}
              <text x="200" y="20" fontSize="14" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Stem-and-Leaf Diagram</text>
              
              {/* Stem and Leaf table */}
              <rect x="100" y="40" width="100" height="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <rect x="200" y="40" width="100" height="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="150" y="60" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Stem</text>
              <text x="250" y="60" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Leaf</text>
              
              {/* Data: 10, 12, 13, 14, 15, 16, 18 */}
              <rect x="100" y="70" width="100" height="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
              <rect x="200" y="70" width="100" height="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="150" y="87" fontSize="11" fill="#1a1a1a" fontWeight="600" textAnchor="middle">1</text>
              <text x="250" y="87" fontSize="11" fill="#10b981" fontWeight="700" textAnchor="middle">0  2  3  4  5  6  8</text>
              
              {/* Key */}
              <text x="200" y="107" fontSize="9" fill="#6b7280" textAnchor="middle">Key: 1|0 = 10</text>
              
              {/* All individual values highlighted */}
              <rect x="30" y="115" width="340" height="60" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" rx="6" />
              <text x="200" y="132" fontSize="10" fill="#10b981" fontWeight="700" textAnchor="middle">Advantage 优势</text>
              <text x="200" y="147" fontSize="9" fill="#1a1a1a" textAnchor="middle">Shows all individual values: 10, 12, 13, 14, 15, 16, 18</text>
              <text x="200" y="160" fontSize="9" fill="#1a1a1a" textAnchor="middle">显示所有原始数据，能看到每个数</text>
              <text x="200" y="172" fontSize="8" fill="#ef4444" fontWeight="600" textAnchor="middle">Disadvantage: too long for large data sets (大数据集太长)</text>
            </svg>
          </div>
        </div>

        <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-4">
          <p className="text-sm text-ink-2 text-center">
            <strong className="text-ink">同一个数据 (10, 12, 13, 14, 15, 16, 18) 用两种图：</strong><br />
            箱线图快看离散（spread）和中位数，但看不到每个数（hides individual values）。<br />
            茎叶图能看到所有原始数据（shows all individual values）。<br />
            <span className="text-accent font-semibold">选图看用途：Want to see each value? → Stem-and-leaf. Want spread and median quickly? → Box plot.</span>
          </p>
        </div>
      </div>
    );
  }

  if (weekNumber === 99) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <svg viewBox="0 0 450 220" className="w-full max-w-[450px] h-auto">
            {/* Title */}
            <text x="225" y="20" fontSize="14" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Standard Deviation Calculation Table 标准差计算表</text>
            
            {/* Example: Data 2, 4, 6, 8; Mean = 5 */}
            <text x="225" y="40" fontSize="11" fill="#6b7280" textAnchor="middle">Example: Data 2, 4, 6, 8  |  Mean = 5</text>
            
            {/* Table headers */}
            <rect x="60" y="50" width="80" height="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <rect x="140" y="50" width="110" height="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <rect x="250" y="50" width="110" height="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="100" y="70" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">x</text>
            <text x="195" y="70" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">x − mean</text>
            <text x="305" y="70" fontSize="11" fill="#1a1a1a" fontWeight="700" textAnchor="middle">(x − mean)²</text>
            
            {/* Data row 1: x=2 */}
            <rect x="60" y="80" width="80" height="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="140" y="80" width="110" height="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="250" y="80" width="110" height="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="100" y="97" fontSize="11" fill="#1a1a1a" textAnchor="middle">2</text>
            <text x="195" y="97" fontSize="11" fill="#d97706" fontWeight="600" textAnchor="middle">2 − 5 = −3</text>
            <text x="305" y="97" fontSize="11" fill="#10b981" fontWeight="700" textAnchor="middle">(−3)² = 9</text>
            
            {/* Data row 2: x=4 */}
            <rect x="60" y="105" width="80" height="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="140" y="105" width="110" height="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="250" y="105" width="110" height="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="100" y="122" fontSize="11" fill="#1a1a1a" textAnchor="middle">4</text>
            <text x="195" y="122" fontSize="11" fill="#d97706" fontWeight="600" textAnchor="middle">4 − 5 = −1</text>
            <text x="305" y="122" fontSize="11" fill="#10b981" fontWeight="700" textAnchor="middle">(−1)² = 1</text>
            
            {/* Data row 3: x=6 */}
            <rect x="60" y="130" width="80" height="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="140" y="130" width="110" height="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="250" y="130" width="110" height="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="100" y="147" fontSize="11" fill="#1a1a1a" textAnchor="middle">6</text>
            <text x="195" y="147" fontSize="11" fill="#d97706" fontWeight="600" textAnchor="middle">6 − 5 = 1</text>
            <text x="305" y="147" fontSize="11" fill="#10b981" fontWeight="700" textAnchor="middle">(1)² = 1</text>
            
            {/* Data row 4: x=8 */}
            <rect x="60" y="155" width="80" height="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="140" y="155" width="110" height="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="250" y="155" width="110" height="25" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="100" y="172" fontSize="11" fill="#1a1a1a" textAnchor="middle">8</text>
            <text x="195" y="172" fontSize="11" fill="#d97706" fontWeight="600" textAnchor="middle">8 − 5 = 3</text>
            <text x="305" y="172" fontSize="11" fill="#10b981" fontWeight="700" textAnchor="middle">(3)² = 9</text>
            
            {/* Sum row */}
            <text x="225" y="195" fontSize="11" fill="#8b5cf6" fontWeight="700" textAnchor="middle">Sum: Σ(x − mean)² = 9 + 1 + 1 + 9 = 20</text>
            
            {/* Final calculation */}
            <rect x="30" y="200" width="390" height="15" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" rx="4" />
            <text x="225" y="210" fontSize="10" fill="#10b981" fontWeight="700" textAnchor="middle">SD = √(20 / 4) = √5</text>
          </svg>
        </div>

        <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-4">
          <p className="text-sm text-ink-2 text-center">
            <strong className="text-ink">标准差步骤：</strong><br />
            ① 算平均数 mean = Σx / n<br />
            ② 算每个数与平均数差的平方 (x − mean)²<br />
            ③ 求平方和 Σ(x − mean)²，除以个数 n，再开方：SD = √( Σ(x − mean)² / n )<br />
            <span className="text-accent font-semibold">不要用 n−1，新加坡中学用 n。不要忘记开方。</span>
          </p>
        </div>
      </div>
    );
  }

  if (weekNumber === 100) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <svg viewBox="0 0 500 310" className="w-full max-w-[500px] h-auto">
            {/* Title */}
            <text x="250" y="20" fontSize="14" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Comparing Two Sets with Mean and SD 用平均数和标准差比较两组</text>
            
            {/* Class A Section */}
            <text x="250" y="45" fontSize="12" fill="#3b82f6" fontWeight="700" textAnchor="middle">Class A 甲班</text>
            <text x="250" y="60" fontSize="10" fill="#6b7280" textAnchor="middle">Data: 58, 60, 62, 64  |  Mean = 61  |  SD = √5</text>
            
            {/* Class A number line (scale 55-75, span 20, from x=80 to x=420, so 340px wide) */}
            {/* 55 at x=80, 75 at x=420, so each unit = 340/20 = 17px */}
            <line x1="80" y1="85" x2="420" y2="85" stroke="#3b82f6" strokeWidth="2" />
            {/* Marks on number line */}
            <line x1="80" y1="80" x2="80" y2="90" stroke="#3b82f6" strokeWidth="2" />
            <text x="80" y="102" fontSize="9" fill="#3b82f6" textAnchor="middle">55</text>
            
            <line x1="165" y1="80" x2="165" y2="90" stroke="#3b82f6" strokeWidth="2" />
            <text x="165" y="102" fontSize="9" fill="#3b82f6" textAnchor="middle">60</text>
            
            <line x1="250" y1="80" x2="250" y2="90" stroke="#3b82f6" strokeWidth="2" />
            <text x="250" y="102" fontSize="9" fill="#3b82f6" textAnchor="middle">65</text>
            
            <line x1="335" y1="80" x2="335" y2="90" stroke="#3b82f6" strokeWidth="2" />
            <text x="335" y="102" fontSize="9" fill="#3b82f6" textAnchor="middle">70</text>
            
            <line x1="420" y1="80" x2="420" y2="90" stroke="#3b82f6" strokeWidth="2" />
            <text x="420" y="102" fontSize="9" fill="#3b82f6" textAnchor="middle">75</text>
            
            {/* Class A data points: 58 at x=80+(58-55)*17=131, 60 at 165, 62 at 199, 64 at 233 */}
            <circle cx="131" cy="85" r="5" fill="#3b82f6" />
            <text x="131" y="118" fontSize="8" fill="#3b82f6" textAnchor="middle">58</text>
            
            <circle cx="165" cy="85" r="5" fill="#3b82f6" />
            <text x="165" y="118" fontSize="8" fill="#3b82f6" textAnchor="middle">60</text>
            
            <circle cx="199" cy="85" r="5" fill="#3b82f6" />
            <text x="199" y="118" fontSize="8" fill="#3b82f6" textAnchor="middle">62</text>
            
            <circle cx="233" cy="85" r="5" fill="#3b82f6" />
            <text x="233" y="118" fontSize="8" fill="#3b82f6" textAnchor="middle">64</text>
            
            {/* Mean marker for Class A at 61: x=80+(61-55)*17=182 */}
            <line x1="182" y1="70" x2="182" y2="90" stroke="#d97706" strokeWidth="3" strokeDasharray="4,2" />
            <text x="182" y="130" fontSize="9" fill="#d97706" fontWeight="700" textAnchor="middle">Mean 平均数 (61)</text>
            
            {/* Class A summary */}
            <rect x="50" y="135" width="400" height="20" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" rx="4" />
            <text x="250" y="148" fontSize="10" fill="#3b82f6" fontWeight="700" textAnchor="middle">Class A: Mean = 61 (lower), SD = √5 (smaller, more consistent 更一致)</text>
            
            {/* Class B Section */}
            <text x="250" y="180" fontSize="12" fill="#10b981" fontWeight="700" textAnchor="middle">Class B 乙班</text>
            <text x="250" y="195" fontSize="10" fill="#6b7280" textAnchor="middle">Data: 60, 64, 68, 72  |  Mean = 66  |  SD = 2√5</text>
            
            {/* Class B number line (same scale 55-75) */}
            <line x1="80" y1="220" x2="420" y2="220" stroke="#10b981" strokeWidth="2" />
            {/* Marks on number line */}
            <line x1="80" y1="215" x2="80" y2="225" stroke="#10b981" strokeWidth="2" />
            <text x="80" y="237" fontSize="9" fill="#10b981" textAnchor="middle">55</text>
            
            <line x1="165" y1="215" x2="165" y2="225" stroke="#10b981" strokeWidth="2" />
            <text x="165" y="237" fontSize="9" fill="#10b981" textAnchor="middle">60</text>
            
            <line x1="250" y1="215" x2="250" y2="225" stroke="#10b981" strokeWidth="2" />
            <text x="250" y="237" fontSize="9" fill="#10b981" textAnchor="middle">65</text>
            
            <line x1="335" y1="215" x2="335" y2="225" stroke="#10b981" strokeWidth="2" />
            <text x="335" y="237" fontSize="9" fill="#10b981" textAnchor="middle">70</text>
            
            <line x1="420" y1="215" x2="420" y2="225" stroke="#10b981" strokeWidth="2" />
            <text x="420" y="237" fontSize="9" fill="#10b981" textAnchor="middle">75</text>
            
            {/* Class B data points: 60 at 165, 64 at 233, 68 at 301, 72 at 369 */}
            <circle cx="165" cy="220" r="5" fill="#10b981" />
            <text x="165" y="253" fontSize="8" fill="#10b981" textAnchor="middle">60</text>
            
            <circle cx="233" cy="220" r="5" fill="#10b981" />
            <text x="233" y="253" fontSize="8" fill="#10b981" textAnchor="middle">64</text>
            
            <circle cx="301" cy="220" r="5" fill="#10b981" />
            <text x="301" y="253" fontSize="8" fill="#10b981" textAnchor="middle">68</text>
            
            <circle cx="369" cy="220" r="5" fill="#10b981" />
            <text x="369" y="253" fontSize="8" fill="#10b981" textAnchor="middle">72</text>
            
            {/* Mean marker for Class B at 66: x=80+(66-55)*17=267 */}
            <line x1="267" y1="205" x2="267" y2="225" stroke="#d97706" strokeWidth="3" strokeDasharray="4,2" />
            <text x="267" y="265" fontSize="9" fill="#d97706" fontWeight="700" textAnchor="middle">Mean 平均数 (66)</text>
            
            {/* Class B summary */}
            <rect x="50" y="275" width="400" height="25" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" rx="4" />
            <text x="250" y="290" fontSize="10" fill="#10b981" fontWeight="700" textAnchor="middle">Class B: Mean = 66 (higher 更高), SD = 2√5 (larger, more spread 更散)</text>
          </svg>
        </div>

        <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-4">
          <p className="text-sm text-ink-2 text-center">
            <strong className="text-ink">比较两组：</strong><br />
            • Larger mean → higher on average（平均数大 → 整体更高）<br />
            • Larger SD → more spread, less consistent（标准差大 → 更散，更不一致）<br />
            <span className="text-accent font-semibold">Class B 平均更高 (66 {'>'} 61) 但更散 (2√5 {'>'} √5)。Class A 平均更低但更一致。不要说"更好"，除非上下文说明什么是更好。</span>
          </p>
        </div>
      </div>
    );
  }

  if (weekNumber === 101) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <svg viewBox="0 0 520 460" className="w-full max-w-[520px] h-auto">
            {/* Title */}
            <text x="260" y="20" fontSize="14" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Dot Diagram, Histogram, and Stem-and-Leaf 点图、直方图和茎叶图</text>
            <text x="260" y="38" fontSize="11" fill="#6b7280" textAnchor="middle">Same data shown three ways 同一组数据的三种表示</text>
            
            {/* Data: 12, 13, 13, 14, 14, 14, 15, 15 (8 values) */}
            
            {/* Section 1: Dot Diagram 点图 */}
            <text x="260" y="65" fontSize="13" fill="#3b82f6" fontWeight="700" textAnchor="middle">1. Dot Diagram 点图</text>
            <text x="260" y="80" fontSize="9" fill="#6b7280" textAnchor="middle">Each dot = one value 每个点是一个数据</text>
            
            {/* Number line for dots */}
            <line x1="100" y1="110" x2="420" y2="110" stroke="#3b82f6" strokeWidth="1.5" />
            
            {/* Marks: 12, 13, 14, 15 at equal spacing */}
            <line x1="140" y1="107" x2="140" y2="113" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="140" y="125" fontSize="10" fill="#3b82f6" textAnchor="middle">12</text>
            
            <line x1="220" y1="107" x2="220" y2="113" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="220" y="125" fontSize="10" fill="#3b82f6" textAnchor="middle">13</text>
            
            <line x1="300" y1="107" x2="300" y2="113" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="300" y="125" fontSize="10" fill="#3b82f6" textAnchor="middle">14</text>
            
            <line x1="380" y1="107" x2="380" y2="113" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="380" y="125" fontSize="10" fill="#3b82f6" textAnchor="middle">15</text>
            
            {/* Dots: 1 at 12, 2 at 13, 3 at 14, 2 at 15 */}
            {/* 12: 1 dot */}
            <circle cx="140" cy="95" r="4" fill="#3b82f6" />
            
            {/* 13: 2 dots stacked */}
            <circle cx="220" cy="95" r="4" fill="#3b82f6" />
            <circle cx="220" cy="85" r="4" fill="#3b82f6" />
            
            {/* 14: 3 dots stacked (mode) */}
            <circle cx="300" cy="95" r="4" fill="#10b981" />
            <circle cx="300" cy="85" r="4" fill="#10b981" />
            <circle cx="300" cy="75" r="4" fill="#10b981" />
            <text x="300" y="67" fontSize="8" fill="#10b981" fontWeight="700" textAnchor="middle">mode 众数</text>
            
            {/* 15: 2 dots stacked */}
            <circle cx="380" cy="95" r="4" fill="#3b82f6" />
            <circle cx="380" cy="85" r="4" fill="#3b82f6" />
            
            <text x="260" y="142" fontSize="9" fill="#6b7280" textAnchor="middle">Value 14 has the most dots (3), so mode = 14</text>
            
            {/* Section 2: Histogram 直方图 */}
            <text x="260" y="175" fontSize="13" fill="#10b981" fontWeight="700" textAnchor="middle">2. Histogram 直方图</text>
            <text x="260" y="190" fontSize="9" fill="#6b7280" textAnchor="middle">Bars touch 柱子连着 | Height = frequency 高度是频数</text>
            
            {/* Histogram bars: Non-overlapping classes */}
            {/* 12–13 = {12, 13, 13} → frequency 3 */}
            {/* 14–15 = {14, 14, 14, 15, 15} → frequency 5 */}
            
            {/* Axes */}
            <line x1="80" y1="310" x2="80" y2="205" stroke="#000" strokeWidth="1.5" />
            <line x1="80" y1="310" x2="440" y2="310" stroke="#000" strokeWidth="1.5" />
            
            {/* Y-axis labels (scale up to 5) */}
            <text x="70" y="313" fontSize="9" fill="#000" textAnchor="end">0</text>
            <text x="70" y="289" fontSize="9" fill="#000" textAnchor="end">1</text>
            <text x="70" y="265" fontSize="9" fill="#000" textAnchor="end">2</text>
            <text x="70" y="241" fontSize="9" fill="#000" textAnchor="end">3</text>
            <text x="70" y="217" fontSize="9" fill="#000" textAnchor="end">4</text>
            <text x="70" y="193" fontSize="9" fill="#000" textAnchor="end">5</text>
            
            {/* Bars (bars touch, each unit = 24px height) */}
            {/* Bar 1: 12–13, frequency 3, height 72px */}
            <rect x="140" y="238" width="140" height="72" fill="#10b981" stroke="#000" strokeWidth="1" />
            <text x="210" y="228" fontSize="10" fill="#10b981" fontWeight="700" textAnchor="middle">3</text>
            
            {/* Bar 2: 14–15, frequency 5, height 120px (tallest, modal class) */}
            <rect x="280" y="190" width="140" height="120" fill="#f59e0b" stroke="#000" strokeWidth="1.5" />
            <text x="350" y="180" fontSize="10" fill="#f59e0b" fontWeight="700" textAnchor="middle">5</text>
            <text x="350" y="168" fontSize="9" fill="#f59e0b" fontWeight="700" textAnchor="middle">modal class</text>
            
            {/* X-axis labels */}
            <text x="210" y="327" fontSize="10" fill="#000" textAnchor="middle">12–13</text>
            <text x="350" y="327" fontSize="10" fill="#f59e0b" fontWeight="700" textAnchor="middle">14–15</text>
            
            <text x="260" y="345" fontSize="9" fill="#6b7280" textAnchor="middle">Non-overlapping classes 不重叠 | 12–13 has 3 values, 14–15 has 5 values</text>
            
            {/* Section 3: Stem-and-Leaf 茎叶图 */}
            <text x="260" y="375" fontSize="13" fill="#d97706" fontWeight="700" textAnchor="middle">3. Stem-and-Leaf Diagram 茎叶图</text>
            <text x="260" y="390" fontSize="9" fill="#6b7280" textAnchor="middle">Key 图例: 1 | 2 means 12</text>
            
            {/* Stem-and-leaf display */}
            <text x="200" y="410" fontSize="10" fill="#d97706" fontWeight="700" textAnchor="end">Stem | Leaf</text>
            <text x="220" y="410" fontSize="10" fill="#000" textAnchor="start">茎 | 叶</text>
            
            <text x="200" y="428" fontSize="11" fill="#d97706" fontWeight="700" textAnchor="end">1 |</text>
            <text x="220" y="428" fontSize="11" fill="#000" textAnchor="start">2 3 3 4 4 4 5 5</text>
            
            <text x="260" y="450" fontSize="9" fill="#6b7280" textAnchor="middle">Stem = tens 茎是十位 | Leaf = ones 叶是个位 | Count leaves for total (8 values)</text>
          </svg>
        </div>

        <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-4">
          <p className="text-sm text-ink-2 text-center">
            <strong className="text-ink">三种图的读法：</strong><br />
            • <strong>Dot diagram</strong>: Each dot = one value. Most dots = mode（点图：每个点是一个数据，点最多的值是众数）<br />
            • <strong>Histogram</strong>: Bars touch. Non-overlapping classes. 12–13 has 12, 13, 13 (3 values), 14–15 has 14, 14, 14, 15, 15 (5 values)（直方图：柱子连着，不重叠的组距）<br />
            • <strong>Stem-and-leaf</strong>: Always check the key! 1 | 2 means 12, not 1 + 2 = 3（茎叶图：要看图例！1 | 2 means 12）<br />
            <span className="text-accent font-semibold">All three show the same data (8 values: 12, 13, 13, 14, 14, 14, 15, 15). Mode = 14.（同一组数据，众数 = 14）</span>
          </p>
        </div>
      </div>
    );
  }

  if (weekNumber === 102) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <svg viewBox="0 0 580 360" className="w-full max-w-[580px] h-auto">
            {/* Title */}
            <text x="290" y="20" fontSize="14" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Stem-and-Leaf vs Histogram 茎叶图 vs 直方图</text>
            <text x="290" y="38" fontSize="11" fill="#6b7280" textAnchor="middle">Same data, different purposes 同一组数据，不同用途</text>
            
            {/* Data: 12, 13, 13, 14, 14, 14, 15, 15 (8 values) */}
            
            {/* Left side: Stem-and-Leaf keeps exact values 茎叶图留着原数据 */}
            <rect x="20" y="55" width="260" height="250" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="8" />
            <text x="150" y="80" fontSize="13" fill="#d97706" fontWeight="700" textAnchor="middle">Stem-and-Leaf 茎叶图</text>
            <text x="150" y="95" fontSize="9" fill="#92400e" textAnchor="middle">Keeps exact values 留着原数据</text>
            
            {/* Stem-and-leaf display */}
            <text x="150" y="120" fontSize="10" fill="#d97706" fontWeight="700" textAnchor="middle">Key: 1 | 2 means 12</text>
            
            <rect x="40" y="135" width="220" height="50" fill="#fffbeb" stroke="#fbbf24" strokeWidth="1" rx="4" />
            <text x="110" y="155" fontSize="11" fill="#d97706" fontWeight="700" textAnchor="end">Stem | Leaf</text>
            <text x="130" y="155" fontSize="11" fill="#000" textAnchor="start">茎 | 叶</text>
            
            <text x="110" y="173" fontSize="12" fill="#d97706" fontWeight="700" textAnchor="end">1 |</text>
            <text x="130" y="173" fontSize="12" fill="#000" textAnchor="start">2 3 3 4 4 4 5 5</text>
            
            {/* Highlight the three 14s */}
            <rect x="175" y="164" width="36" height="14" fill="none" stroke="#10b981" strokeWidth="2" rx="2" />
            <text x="193" y="203" fontSize="9" fill="#10b981" fontWeight="700" textAnchor="middle">three 14s</text>
            <text x="193" y="215" fontSize="9" fill="#10b981" textAnchor="middle">三个 14</text>
            
            {/* Advantage */}
            <text x="150" y="240" fontSize="10" fill="#92400e" fontWeight="700" textAnchor="middle">✓ Advantage 优势：</text>
            <text x="150" y="255" fontSize="9" fill="#78350f" textAnchor="middle">We can see</text>
            <text x="150" y="268" fontSize="9" fill="#78350f" textAnchor="middle">EXACTLY how many 14s</text>
            <text x="150" y="281" fontSize="9" fill="#78350f" textAnchor="middle">能看到确切有几个 14</text>
            
            {/* Right side: Histogram groups data 直方图分组 */}
            <rect x="300" y="55" width="260" height="250" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="8" />
            <text x="430" y="80" fontSize="13" fill="#1e40af" fontWeight="700" textAnchor="middle">Histogram 直方图</text>
            <text x="430" y="95" fontSize="9" fill="#1e3a8a" textAnchor="middle">Groups data 分组数据</text>
            
            {/* Histogram display */}
            <text x="430" y="120" fontSize="10" fill="#1e40af" fontWeight="700" textAnchor="middle">Class intervals 组距</text>
            
            {/* Simple histogram */}
            <line x1="330" y1="215" x2="330" y2="135" stroke="#000" strokeWidth="1.5" />
            <line x1="330" y1="215" x2="530" y2="215" stroke="#000" strokeWidth="1.5" />
            
            {/* Y-axis labels */}
            <text x="322" y="218" fontSize="8" fill="#000" textAnchor="end">0</text>
            <text x="322" y="176" fontSize="8" fill="#000" textAnchor="end">3</text>
            <text x="322" y="145" fontSize="8" fill="#000" textAnchor="end">5</text>
            
            {/* Bars */}
            {/* Bar 1: 12–13, frequency 3, height 42 (3×14=42), y=173 (215-42=173) */}
            <rect x="350" y="173" width="80" height="42" fill="#60a5fa" stroke="#000" strokeWidth="1" />
            <text x="390" y="161" fontSize="9" fill="#1e40af" fontWeight="700" textAnchor="middle">3</text>
            
            {/* Bar 2: 14–15, frequency 5 */}
            <rect x="430" y="145" width="80" height="70" fill="#3b82f6" stroke="#000" strokeWidth="1.5" />
            <text x="470" y="133" fontSize="9" fill="#1e40af" fontWeight="700" textAnchor="middle">5</text>
            
            {/* X-axis labels */}
            <text x="390" y="230" fontSize="10" fill="#000" textAnchor="middle">12–13</text>
            <text x="470" y="230" fontSize="10" fill="#1e40af" fontWeight="700" textAnchor="middle">14–15</text>
            
            {/* Highlight the bar 14–15 */}
            <rect x="432" y="147" width="76" height="66" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,2" rx="2" />
            <text x="470" y="256" fontSize="9" fill="#f59e0b" fontWeight="700" textAnchor="middle">5 in "14–15"</text>
            <text x="470" y="268" fontSize="9" fill="#f59e0b" textAnchor="middle">but we don't know</text>
            <text x="470" y="280" fontSize="9" fill="#f59e0b" textAnchor="middle">how many 14s</text>
            <text x="470" y="292" fontSize="9" fill="#f59e0b" textAnchor="middle">不知道几个 14</text>
            
            {/* Bottom summary */}
            <rect x="40" y="315" width="500" height="35" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" rx="6" />
            <text x="290" y="330" fontSize="10" fill="#065f46" fontWeight="700" textAnchor="middle">Stem-and-leaf keeps 14,14,14; histogram only shows "5 in 14–15"</text>
            <text x="290" y="343" fontSize="9" fill="#047857" textAnchor="middle">茎叶图留着 14,14,14；直方图只显示"14–15 有 5 个"</text>
          </svg>
        </div>

        <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-4">
          <p className="text-sm text-ink-2 text-center">
            <strong className="text-ink">本周重点（S1.6 purposes and uses, advantages and disadvantages）：</strong><br />
            • <strong>Stem-and-leaf keeps exact values</strong>（茎叶图留着原数据）: We can see three 14s and two 15s（能看到三个 14 和两个 15）<br />
            • <strong>Histogram groups data, loses exact values</strong>（直方图分组，丢掉具体分数）: The bar 14–15 shows 5 scores, but we don't know how many 14s and how many 15s（柱 14–15 显示 5 个分数，但不知道几个 14 几个 15）<br />
            <span className="text-accent font-semibold">When to use? Stem-and-leaf for small data when we need exact values; histogram for large grouped data when we only need frequency.（什么时候用？茎叶图适合小数据需要原值；直方图适合大数据只要频数）</span>
          </p>
        </div>
      </div>
    );
  }

  if (weekNumber === 103) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <svg viewBox="0 0 580 360" className="w-full max-w-[580px] h-auto">
            {/* Title */}
            <text x="290" y="20" fontSize="14" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Fair vs Misleading Bar Chart 公平 vs 误导的柱状图</text>
            <text x="290" y="38" fontSize="11" fill="#6b7280" textAnchor="middle">Same data, different scales 同一组数据，不同刻度</text>
            
            {/* Data: Aisha scored 20, Wei scored 22 */}
            
            {/* Left side: Fair bar chart (axis from 0) 公平柱状图（纵轴从 0 开始）*/}
            <rect x="20" y="55" width="260" height="250" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" rx="8" />
            <text x="150" y="80" fontSize="13" fill="#059669" fontWeight="700" textAnchor="middle">Fair Chart 公平图</text>
            <text x="150" y="95" fontSize="9" fill="#047857" textAnchor="middle">Axis from 0 纵轴从 0 开始</text>
            
            {/* Y-axis */}
            <line x1="50" y1="240" x2="50" y2="115" stroke="#000" strokeWidth="1.5" />
            <line x1="50" y1="240" x2="240" y2="240" stroke="#000" strokeWidth="1.5" />
            
            {/* Y-axis labels (0 to 25) */}
            <text x="42" y="243" fontSize="8" fill="#000" textAnchor="end">0</text>
            <text x="42" y="193" fontSize="8" fill="#000" textAnchor="end">10</text>
            <text x="42" y="143" fontSize="8" fill="#000" textAnchor="end">20</text>
            <text x="42" y="118" fontSize="8" fill="#000" textAnchor="end">25</text>
            
            {/* Bar for Aisha (20): height = 20/25 * 125 = 100px, y = 240-100 = 140 */}
            <rect x="80" y="140" width="50" height="100" fill="#34d399" stroke="#000" strokeWidth="1" />
            <text x="105" y="131" fontSize="10" fill="#047857" fontWeight="700" textAnchor="middle">20</text>
            <text x="105" y="256" fontSize="9" fill="#000" textAnchor="middle">Aisha</text>
            
            {/* Bar for Wei (22): height = 22/25 * 125 = 110px, y = 240-110 = 130 */}
            <rect x="160" y="130" width="50" height="110" fill="#10b981" stroke="#000" strokeWidth="1" />
            <text x="185" y="121" fontSize="10" fill="#047857" fontWeight="700" textAnchor="middle">22</text>
            <text x="185" y="256" fontSize="9" fill="#000" textAnchor="middle">Wei</text>
            
            {/* Annotation */}
            <text x="150" y="275" fontSize="9" fill="#065f46" fontWeight="700" textAnchor="middle">Bars look almost equal</text>
            <text x="150" y="287" fontSize="9" fill="#047857" textAnchor="middle">柱子看起来差不多高</text>
            <text x="150" y="299" fontSize="9" fill="#047857" textAnchor="middle">Difference is only 2</text>
            
            {/* Right side: Misleading bar chart (axis from 18) 误导柱状图（纵轴从 18 开始）*/}
            <rect x="300" y="55" width="260" height="250" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" rx="8" />
            <text x="430" y="80" fontSize="13" fill="#dc2626" fontWeight="700" textAnchor="middle">Misleading Chart 误导图</text>
            <text x="430" y="95" fontSize="9" fill="#991b1b" textAnchor="middle">Axis from 18 纵轴从 18 开始</text>
            
            {/* Y-axis */}
            <line x1="330" y1="240" x2="330" y2="115" stroke="#000" strokeWidth="1.5" />
            <line x1="330" y1="240" x2="520" y2="240" stroke="#000" strokeWidth="1.5" />
            
            {/* Y-axis labels (18 to 23) */}
            <text x="322" y="243" fontSize="8" fill="#dc2626" fontWeight="700" textAnchor="end">18</text>
            <text x="322" y="193" fontSize="8" fill="#000" textAnchor="end">20</text>
            <text x="322" y="143" fontSize="8" fill="#000" textAnchor="end">22</text>
            <text x="322" y="118" fontSize="8" fill="#000" textAnchor="end">23</text>
            
            {/* Bar for Aisha (20): (20-18)/(23-18) * 125 = 2/5 * 125 = 50px, y = 240-50 = 190 */}
            <rect x="360" y="190" width="50" height="50" fill="#fca5a5" stroke="#000" strokeWidth="1" />
            <text x="385" y="181" fontSize="10" fill="#991b1b" fontWeight="700" textAnchor="middle">20</text>
            <text x="385" y="256" fontSize="9" fill="#000" textAnchor="middle">Aisha</text>
            
            {/* Bar for Wei (22): (22-18)/(23-18) * 125 = 4/5 * 125 = 100px, y = 240-100 = 140 */}
            <rect x="440" y="140" width="50" height="100" fill="#ef4444" stroke="#000" strokeWidth="1.5" />
            <text x="465" y="131" fontSize="10" fill="#991b1b" fontWeight="700" textAnchor="middle">22</text>
            <text x="465" y="256" fontSize="9" fill="#000" textAnchor="middle">Wei</text>
            
            {/* Warning annotation */}
            <line x1="440" y1="190" x2="410" y2="190" stroke="#dc2626" strokeWidth="1" strokeDasharray="2,2" />
            <text x="430" y="275" fontSize="9" fill="#dc2626" fontWeight="700" textAnchor="middle">Wei looks MUCH taller</text>
            <text x="430" y="287" fontSize="9" fill="#991b1b" textAnchor="middle">Wei 看起来高很多</text>
            <text x="430" y="299" fontSize="9" fill="#991b1b" textAnchor="middle">but difference is still 2!</text>
            
            {/* Bottom summary */}
            <rect x="40" y="315" width="500" height="35" fill="#fff7ed" stroke="#f59e0b" strokeWidth="1.5" rx="6" />
            <text x="290" y="330" fontSize="10" fill="#92400e" fontWeight="700" textAnchor="middle">Axis from 0: bars look almost equal (正确). Axis from 18: small difference looks huge (误导)!</text>
            <text x="290" y="343" fontSize="9" fill="#d97706" textAnchor="middle">从 0 开始：柱子差不多高（正确）。从 18 开始：小差别看起来很大（误导）！</text>
          </svg>
        </div>

        <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-4">
          <p className="text-sm text-ink-2 text-center">
            <strong className="text-ink">本周重点（S1.7 explaining why a given statistical diagram leads to misinterpretation）：</strong><br />
            • <strong>Axis not starting at 0 misleads</strong>（纵轴不从 0 开始会误导）: The right chart makes 22 look much taller than 20, but the difference is only 2（右图让 22 看起来比 20 高很多，但差别只有 2）<br />
            • <strong>Fair chart starts axis at 0</strong>（公平图纵轴从 0 开始）: The left chart shows the true size. Bars for 20 and 22 look almost equal, which is correct（左图显示真实大小。20 和 22 的柱子看起来差不多高，这是正确的）<br />
            <span className="text-accent font-semibold">Always read the scale! Don't just look at which bar is taller.（一定要读刻度！不要只看哪根柱子高。）</span>
          </p>
        </div>
      </div>
    );
  }

  if (weekNumber === 104) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <svg viewBox="0 0 580 340" className="w-full max-w-[580px] h-auto">
            {/* Title */}
            <text x="290" y="20" fontSize="14" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Mean, Mode, Median with an Outlier 平均数、众数、中位数与极端值</text>
            <text x="290" y="38" fontSize="11" fill="#6b7280" textAnchor="middle">Data: 2, 3, 3, 3, 4, 20 (one outlier)</text>
            
            {/* Number line background */}
            <rect x="40" y="60" width="500" height="180" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="8" />
            <text x="290" y="80" fontSize="12" fill="#92400e" fontWeight="700" textAnchor="middle">Number Line 数轴</text>
            
            {/* Number line axis */}
            <line x1="70" y1="150" x2="510" y2="150" stroke="#000" strokeWidth="2" />
            
            {/* Tick marks and labels for 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 */}
            <line x1="70" y1="145" x2="70" y2="155" stroke="#000" strokeWidth="1.5" />
            <text x="70" y="170" fontSize="9" fill="#000" textAnchor="middle">0</text>
            
            <line x1="114" y1="145" x2="114" y2="155" stroke="#000" strokeWidth="1.5" />
            <text x="114" y="170" fontSize="9" fill="#000" textAnchor="middle">2</text>
            
            <line x1="158" y1="145" x2="158" y2="155" stroke="#000" strokeWidth="1.5" />
            <text x="158" y="170" fontSize="9" fill="#000" textAnchor="middle">4</text>
            
            <line x1="202" y1="145" x2="202" y2="155" stroke="#000" strokeWidth="1.5" />
            <text x="202" y="170" fontSize="9" fill="#000" textAnchor="middle">6</text>
            
            <line x1="246" y1="145" x2="246" y2="155" stroke="#000" strokeWidth="1.5" />
            <text x="246" y="170" fontSize="9" fill="#000" textAnchor="middle">8</text>
            
            <line x1="290" y1="145" x2="290" y2="155" stroke="#000" strokeWidth="1.5" />
            <text x="290" y="170" fontSize="9" fill="#000" textAnchor="middle">10</text>
            
            <line x1="334" y1="145" x2="334" y2="155" stroke="#000" strokeWidth="1.5" />
            <text x="334" y="170" fontSize="9" fill="#000" textAnchor="middle">12</text>
            
            <line x1="378" y1="145" x2="378" y2="155" stroke="#000" strokeWidth="1.5" />
            <text x="378" y="170" fontSize="9" fill="#000" textAnchor="middle">14</text>
            
            <line x1="422" y1="145" x2="422" y2="155" stroke="#000" strokeWidth="1.5" />
            <text x="422" y="170" fontSize="9" fill="#000" textAnchor="middle">16</text>
            
            <line x1="466" y1="145" x2="466" y2="155" stroke="#000" strokeWidth="1.5" />
            <text x="466" y="170" fontSize="9" fill="#000" textAnchor="middle">18</text>
            
            <line x1="510" y1="145" x2="510" y2="155" stroke="#000" strokeWidth="1.5" />
            <text x="510" y="170" fontSize="9" fill="#000" textAnchor="middle">20</text>
            
            {/* Data points as dots */}
            {/* 2: x = 114 */}
            <circle cx="114" cy="150" r="5" fill="#10b981" stroke="#000" strokeWidth="1" />
            
            {/* 3, 3, 3: x = 136 (stacked vertically) */}
            <circle cx="136" cy="150" r="5" fill="#10b981" stroke="#000" strokeWidth="1" />
            <circle cx="136" cy="138" r="5" fill="#10b981" stroke="#000" strokeWidth="1" />
            <circle cx="136" cy="126" r="5" fill="#10b981" stroke="#000" strokeWidth="1" />
            
            {/* 4: x = 158 */}
            <circle cx="158" cy="150" r="5" fill="#10b981" stroke="#000" strokeWidth="1" />
            
            {/* 20 (outlier): x = 510 */}
            <circle cx="510" cy="150" r="6" fill="#ef4444" stroke="#000" strokeWidth="2" />
            <text x="510" y="138" fontSize="9" fill="#dc2626" fontWeight="700" textAnchor="middle">outlier</text>
            <text x="510" y="195" fontSize="8" fill="#dc2626" textAnchor="middle">极端值</text>
            
            {/* Mode marker (at 3) */}
            <line x1="136" y1="105" x2="136" y2="120" stroke="#8b5cf6" strokeWidth="2" />
            <circle cx="136" cy="105" r="4" fill="#8b5cf6" />
            <text x="136" y="98" fontSize="10" fill="#7c3aed" fontWeight="700" textAnchor="middle">Mode = 3</text>
            <text x="136" y="210" fontSize="8" fill="#7c3aed" textAnchor="middle">众数 = 3</text>
            <text x="136" y="220" fontSize="7" fill="#7c3aed" textAnchor="middle">(most common)</text>
            
            {/* Median marker (at 3) */}
            <line x1="136" y1="180" x2="136" y2="193" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="136" cy="193" r="4" fill="#3b82f6" />
            <text x="136" y="228" fontSize="10" fill="#2563eb" fontWeight="700" textAnchor="middle">Median = 3</text>
            <text x="136" y="238" fontSize="8" fill="#2563eb" textAnchor="middle">中位数 = 3 (middle)</text>
            
            {/* Mean marker (at 35/6 ≈ 5.83, which is approximately at x = 70 + (35/6) * 22 = 70 + 128.33 = 198.33) */}
            <line x1="198" y1="105" x2="198" y2="120" stroke="#f97316" strokeWidth="2" />
            <circle cx="198" cy="105" r="4" fill="#f97316" />
            <text x="198" y="98" fontSize="10" fill="#ea580c" fontWeight="700" textAnchor="middle">Mean = 35/6</text>
            <text x="198" y="210" fontSize="8" fill="#ea580c" textAnchor="middle">平均数 ≈ 5.8</text>
            <text x="198" y="220" fontSize="7" fill="#ea580c" textAnchor="middle">(pulled by 20)</text>
            
            {/* Arrow showing mean is pulled toward outlier */}
            <line x1="198" y1="110" x2="480" y2="135" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#f97316" />
              </marker>
            </defs>
            <text x="340" y="115" fontSize="8" fill="#ea580c" fontWeight="700" textAnchor="middle">Mean pulled toward outlier</text>
            <text x="340" y="125" fontSize="7" fill="#ea580c" textAnchor="middle">平均数被极端值拉偏</text>
            
          </svg>
        </div>

        <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-4">
          <p className="text-sm text-ink-2 text-center leading-relaxed">
            <strong className="text-ink">本周重点（S1.9 purposes and use of mean, mode and median）：</strong><br />
            • <strong>Mean = 35/6 ≈ 5.8</strong> — pulled toward the outlier 20（平均数被极端值 20 拉高）<br />
            • <strong>Median = 3</strong> — the middle value, not affected by the outlier（中位数是中间的值，不受极端值影响）<br />
            • <strong>Mode = 3</strong> — the most common value, appears 3 times（众数是出现最多的值，出现 3 次）<br />
            <span className="text-accent font-semibold">When there is an outlier, use the median or mode instead of the mean!（有极端值时，用中位数或众数，不要用平均数！）</span>
          </p>
        </div>
      </div>
    );
  }

  if (weekNumber === 105) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <svg viewBox="0 0 620 480" className="w-full max-w-[620px] h-auto">
            {/* Title */}
            <text x="310" y="20" fontSize="14" fill="#1a1a1a" fontWeight="700" textAnchor="middle">Standard Form A × 10ⁿ 科学记数法</text>
            <text x="310" y="38" fontSize="11" fill="#6b7280" textAnchor="middle">where 1 ≤ A &lt; 10, and n is an integer（A 要满足 1 ≤ A &lt; 10，n 是整数）</text>
            
            {/* Example 1: Large number (positive index) */}
            <rect x="30" y="60" width="560" height="180" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="8" />
            <text x="310" y="80" fontSize="12" fill="#1e40af" fontWeight="700" textAnchor="middle">Example 1: Large Number 大数（n 是正整数）</text>
            
            {/* Original number */}
            <text x="310" y="105" fontSize="13" fill="#1a1a1a" fontWeight="700" textAnchor="middle">3 400 000</text>
            
            {/* Arrow showing decimal point movement */}
            <text x="90" y="135" fontSize="10" fill="#1e40af" textAnchor="start">3</text>
            <text x="102" y="135" fontSize="10" fill="#ef4444" fontWeight="700" textAnchor="start">.</text>
            <text x="112" y="135" fontSize="10" fill="#1e40af" textAnchor="start">4</text>
            <text x="124" y="135" fontSize="10" fill="#1e40af" textAnchor="start">0</text>
            <text x="136" y="135" fontSize="10" fill="#1e40af" textAnchor="start">0</text>
            <text x="148" y="135" fontSize="10" fill="#1e40af" textAnchor="start">0</text>
            <text x="160" y="135" fontSize="10" fill="#1e40af" textAnchor="start">0</text>
            <text x="172" y="135" fontSize="10" fill="#1e40af" textAnchor="start">0</text>
            <text x="184" y="135" fontSize="10" fill="#1e40af" textAnchor="start">0</text>
            
            {/* Arrow showing 6 places to the left */}
            <line x1="105" y1="145" x2="185" y2="145" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead1)" />
            <defs>
              <marker id="arrowhead1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
              </marker>
            </defs>
            <text x="145" y="160" fontSize="9" fill="#dc2626" fontWeight="700" textAnchor="middle">6 places left</text>
            <text x="145" y="172" fontSize="8" fill="#dc2626" textAnchor="middle">小数点左移 6 位</text>
            
            {/* Arrow down */}
            <line x1="310" y1="180" x2="310" y2="195" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead2)" />
            <defs>
              <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
              </marker>
            </defs>
            
            {/* Standard form result */}
            <text x="310" y="215" fontSize="14" fill="#1e40af" fontWeight="700" textAnchor="middle">3.4 × 10⁶</text>
            <text x="310" y="230" fontSize="9" fill="#6b7280" textAnchor="middle">(A = 3.4, which is between 1 and 10; n = 6)</text>
            
            {/* Example 2: Small number (negative index) */}
            <rect x="30" y="260" width="560" height="180" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="8" />
            <text x="310" y="280" fontSize="12" fill="#92400e" fontWeight="700" textAnchor="middle">Example 2: Small Number 小数（n 是负整数）</text>
            
            {/* Original number */}
            <text x="310" y="305" fontSize="13" fill="#1a1a1a" fontWeight="700" textAnchor="middle">0.0025</text>
            
            {/* Arrow showing decimal point movement */}
            <text x="90" y="335" fontSize="10" fill="#92400e" textAnchor="start">0</text>
            <text x="102" y="335" fontSize="10" fill="#92400e" textAnchor="start">.</text>
            <text x="112" y="335" fontSize="10" fill="#92400e" textAnchor="start">0</text>
            <text x="124" y="335" fontSize="10" fill="#92400e" textAnchor="start">0</text>
            <text x="136" y="335" fontSize="10" fill="#92400e" textAnchor="start">2</text>
            <text x="148" y="335" fontSize="10" fill="#ef4444" fontWeight="700" textAnchor="start">.</text>
            <text x="158" y="335" fontSize="10" fill="#92400e" textAnchor="start">5</text>
            
            {/* Arrow showing 3 places to the right */}
            <line x1="105" y1="345" x2="145" y2="345" stroke="#ef4444" strokeWidth="2" markerStart="url(#arrowhead3)" />
            <defs>
              <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="10 0, 0 3.5, 10 7" fill="#ef4444" />
              </marker>
            </defs>
            <text x="125" y="360" fontSize="9" fill="#dc2626" fontWeight="700" textAnchor="middle">3 places right</text>
            <text x="125" y="372" fontSize="8" fill="#dc2626" textAnchor="middle">小数点右移 3 位</text>
            
            {/* Arrow down */}
            <line x1="310" y1="380" x2="310" y2="395" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead4)" />
            <defs>
              <marker id="arrowhead4" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
              </marker>
            </defs>
            
            {/* Standard form result */}
            <text x="310" y="415" fontSize="14" fill="#92400e" fontWeight="700" textAnchor="middle">2.5 × 10⁻³</text>
            <text x="310" y="430" fontSize="9" fill="#6b7280" textAnchor="middle">(A = 2.5, which is between 1 and 10; n = -3)</text>
            
            {/* Key point */}
            <text x="310" y="465" fontSize="10" fill="#dc2626" fontWeight="700" textAnchor="middle">⚠ A can be 1, but A cannot be 10 （A 可以是 1，不能是 10）</text>
          </svg>
        </div>

        <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-4">
          <p className="text-sm text-ink-2 text-center leading-relaxed">
            <strong className="text-ink">本周重点（N1.8 use of standard form A × 10^n）：</strong><br />
            • <strong>大数（n 是正整数）：</strong>3 400 000 = 3.4 × 10^6（小数点左移 6 位，所以 n = 6）<br />
            • <strong>小数（n 是负整数）：</strong>0.0025 = 2.5 × 10^(-3)（小数点右移 3 位，所以 n = -3）<br />
            • <strong>A 的范围：</strong>1 ≤ A &lt; 10（A 可以是 1，不能是 10）<br />
            <span className="text-accent font-semibold">常见错误：A = 34 或 A = 0.34（A 不满足 1 ≤ A &lt; 10）；写成 10 × 10^5（A 不能是 10）；小数漏掉负号（要写 10^(-3)，不要写 10^3）</span>
          </p>
        </div>
      </div>
    );
  }

  if (weekNumber === 106) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Tile 1: Positive integer index */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-5 flex flex-col items-center justify-center">
            <p className="text-sm text-blue-900 font-semibold mb-3">正整数指数 Positive Integer Index</p>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-900 mb-2">2³ = 8</p>
              <p className="text-sm text-blue-700">2³ = 2 × 2 × 2 = 8</p>
              <p className="text-xs text-blue-600 mt-2">a^n 是 n 个 a 相乘</p>
            </div>
          </div>

          {/* Tile 2: Zero index */}
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5 flex flex-col items-center justify-center">
            <p className="text-sm text-green-900 font-semibold mb-3">零指数 Zero Index</p>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-900 mb-2">2⁰ = 1</p>
              <p className="text-sm text-green-700">a⁰ = 1 (a ≠ 0)</p>
              <p className="text-xs text-red-600 mt-2">❌ 2⁰ = 0 or 2</p>
            </div>
          </div>

          {/* Tile 3: Negative index */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5 flex flex-col items-center justify-center">
            <p className="text-sm text-amber-900 font-semibold mb-3">负指数 Negative Index</p>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-900 mb-2">2⁻³ = 1/8</p>
              <p className="text-sm text-amber-700">2⁻³ = 1/(2³) = 1/8</p>
              <p className="text-xs text-red-600 mt-2">❌ 2⁻³ = -8</p>
            </div>
          </div>

          {/* Tile 4: Fractional index */}
          <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-5 flex flex-col items-center justify-center">
            <p className="text-sm text-purple-900 font-semibold mb-3">分数指数 Fractional Index</p>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-900 mb-2">9^(1/2) = 3</p>
              <p className="text-sm text-purple-700">9^(1/2) = √9 = 3</p>
              <p className="text-xs text-red-600 mt-2">❌ 9^(1/2) = 9/2</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-4">
          <p className="text-sm text-ink-2 text-center leading-relaxed">
            <strong className="text-ink">本周重点（N1.9 positive, negative, zero and fractional indices）：</strong><br />
            • <strong>正整数指数：</strong>2³ = 2 × 2 × 2 = 8（a^n 是 n 个 a 相乘）<br />
            • <strong>零指数：</strong>2⁰ = 1（a⁰ = 1, a ≠ 0）<br />
            • <strong>负指数：</strong>2⁻³ = 1/(2³) = 1/8（a^(-n) = 1/(a^n)，是倒数不是负数）<br />
            • <strong>分数指数：</strong>9^(1/2) = √9 = 3, 8^(1/3) = ∛8 = 2（a^(1/2) = √a, a^(1/3) = ∛a）<br />
            <span className="text-accent font-semibold">常见错误：2⁰ = 0 or 2；2⁻³ = -8；9^(1/2) = 9/2；写 1/(2³) 为 2^(-1/3)</span>
          </p>
        </div>
      </div>
    );
  }

  if (weekNumber === 107) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Tile 1: Multiplication law */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-5 flex flex-col items-center justify-center">
            <p className="text-sm text-blue-900 font-semibold mb-3">相乘指数相加</p>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-900 mb-2">2³ × 2⁴ = 2⁷</p>
              <p className="text-sm text-blue-700">3 + 4 = 7</p>
              <p className="text-xs text-blue-600 mt-2">a^m × a^n = a^(m+n)</p>
              <p className="text-xs text-red-600 mt-2">❌ 2³ × 2⁴ = 4⁷</p>
            </div>
          </div>

          {/* Tile 2: Division law */}
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5 flex flex-col items-center justify-center">
            <p className="text-sm text-green-900 font-semibold mb-3">相除指数相减</p>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-900 mb-2">2⁵ ÷ 2² = 2³</p>
              <p className="text-sm text-green-700">5 − 2 = 3</p>
              <p className="text-xs text-green-600 mt-2">a^m ÷ a^n = a^(m−n)</p>
              <p className="text-xs text-red-600 mt-2">❌ 2⁵ ÷ 2² = 1³</p>
            </div>
          </div>

          {/* Tile 3: Power law */}
          <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-5 flex flex-col items-center justify-center">
            <p className="text-sm text-purple-900 font-semibold mb-3">乘方指数相乘</p>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-900 mb-2">(2³)² = 2⁶</p>
              <p className="text-sm text-purple-700">3 × 2 = 6</p>
              <p className="text-xs text-purple-600 mt-2">(a^m)^n = a^(m×n)</p>
              <p className="text-xs text-red-600 mt-2">❌ (2³)² = 2⁵</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-4">
          <p className="text-sm text-ink-2 text-center leading-relaxed">
            <strong className="text-ink">本周重点（N1.10 laws of indices）：</strong><br />
            • <strong>相乘指数相加：</strong>2³ × 2⁴ = 2^(3+4) = 2⁷（a^m × a^n = a^(m+n)）<br />
            • <strong>相除指数相减：</strong>2⁵ ÷ 2² = 2^(5−2) = 2³（a^m ÷ a^n = a^(m−n)）<br />
            • <strong>乘方指数相乘：</strong>(2³)² = 2^(3×2) = 2⁶（(a^m)^n = a^(m×n)）<br />
            <span className="text-accent font-semibold">常见错误：2³ × 2⁴ = 4⁷（底数也加）；2³ × 2⁴ = 2¹²（指数相乘）；(2³)² = 2⁵（指数相加）</span>
          </p>
        </div>
      </div>
    );
  }

  if (weekNumber === 108) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Graph 1: y = (x - 2)² + 1 (opens up, vertex form) */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-5">
            <p className="text-sm text-blue-900 font-semibold mb-3 text-center">y = (x − 2)² + 1</p>
            <svg viewBox="0 0 200 200" className="w-full h-48">
              {/* Axes */}
              <line x1="20" y1="160" x2="190" y2="160" stroke="#333" strokeWidth="1.5" />
              <line x1="60" y1="20" x2="60" y2="185" stroke="#333" strokeWidth="1.5" />
              {/* Arrow heads */}
              <polygon points="190,160 185,157 185,163" fill="#333" />
              <polygon points="60,20 57,25 63,25" fill="#333" />
              {/* Grid marks */}
              <line x1="100" y1="157" x2="100" y2="163" stroke="#666" strokeWidth="1" />
              <line x1="57" y1="140" x2="63" y2="140" stroke="#666" strokeWidth="1" />
              {/* Parabola opening up: y = (x-2)^2 + 1, vertex at (2,1) */}
              <path
                d="M 60,60 L 80,120 L 100,140 L 120,120 L 140,60"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.5"
              />
              {/* Vertex point */}
              <circle cx="100" cy="140" r="4" fill="#ef4444" />
              {/* Labels */}
              <text x="100" y="177" fontSize="11" textAnchor="middle" fill="#333">2</text>
              <text x="50" y="143" fontSize="11" textAnchor="middle" fill="#333">1</text>
              <text x="105" y="135" fontSize="10" fill="#ef4444" fontWeight="bold">(2, 1)</text>
            </svg>
            <p className="text-xs text-blue-700 text-center mt-2">开口向上，顶点 (2, 1)</p>
            <p className="text-xs text-red-600 text-center mt-1">❌ 顶点不是 (−2, 1)</p>
          </div>

          {/* Graph 2: y = -(x - 2)² + 1 (opens down, vertex form) */}
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5">
            <p className="text-sm text-green-900 font-semibold mb-3 text-center">y = −(x − 2)² + 1</p>
            <svg viewBox="0 0 200 200" className="w-full h-48">
              {/* Axes */}
              <line x1="20" y1="140" x2="190" y2="140" stroke="#333" strokeWidth="1.5" />
              <line x1="60" y1="20" x2="60" y2="185" stroke="#333" strokeWidth="1.5" />
              {/* Arrow heads */}
              <polygon points="190,140 185,137 185,143" fill="#333" />
              <polygon points="60,20 57,25 63,25" fill="#333" />
              {/* Grid marks */}
              <line x1="100" y1="137" x2="100" y2="143" stroke="#666" strokeWidth="1" />
              <line x1="57" y1="120" x2="63" y2="120" stroke="#666" strokeWidth="1" />
              {/* Parabola opening down: y = -(x-2)^2 + 1, vertex at (2,1) */}
              <path
                d="M 40,180 L 80,140 L 100,120 L 120,140 L 160,180"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2.5"
              />
              {/* Vertex point */}
              <circle cx="100" cy="120" r="4" fill="#ef4444" />
              {/* Labels */}
              <text x="100" y="157" fontSize="11" textAnchor="middle" fill="#333">2</text>
              <text x="50" y="123" fontSize="11" textAnchor="middle" fill="#333">1</text>
              <text x="105" y="115" fontSize="10" fill="#ef4444" fontWeight="bold">(2, 1)</text>
            </svg>
            <p className="text-xs text-green-700 text-center mt-2">开口向下，顶点 (2, 1)</p>
            <p className="text-xs text-red-600 text-center mt-1">❌ 不是开口向上</p>
          </div>

          {/* Graph 3: y = (x - 1)(x - 5) (opens up, intercept form) */}
          <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-5">
            <p className="text-sm text-purple-900 font-semibold mb-3 text-center">y = (x − 1)(x − 5)</p>
            <svg viewBox="0 0 200 200" className="w-full h-48">
              {/* Axes */}
              <line x1="20" y1="90" x2="190" y2="90" stroke="#333" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="40" y2="185" stroke="#333" strokeWidth="1.5" />
              {/* Arrow heads */}
              <polygon points="190,90 185,87 185,93" fill="#333" />
              <polygon points="40,20 37,25 43,25" fill="#333" />
              {/* Grid marks */}
              <line x1="60" y1="87" x2="60" y2="93" stroke="#666" strokeWidth="1" />
              <line x1="140" y1="87" x2="140" y2="93" stroke="#666" strokeWidth="1" />
              {/* Parabola opening up: y = (x-1)(x-5), x-intercepts at 1 and 5, vertex at (3,-4) */}
              <path
                d="M 40,30 L 60,90 L 100,138 L 140,90 L 160,30"
                fill="none"
                stroke="#9333ea"
                strokeWidth="2.5"
              />
              {/* X-intercepts */}
              <circle cx="60" cy="90" r="4" fill="#ef4444" />
              <circle cx="140" cy="90" r="4" fill="#ef4444" />
              {/* Labels */}
              <text x="60" y="82" fontSize="10" fill="#ef4444" fontWeight="bold">1</text>
              <text x="140" y="82" fontSize="10" fill="#ef4444" fontWeight="bold">5</text>
            </svg>
            <p className="text-xs text-purple-700 text-center mt-2">开口向上，x 轴交点 1 和 5</p>
            <p className="text-xs text-red-600 text-center mt-1">❌ 不要混淆交点和顶点</p>
          </div>

          {/* Graph 4: y = -(x - 1)(x - 5) (opens down, intercept form) */}
          <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-5">
            <p className="text-sm text-orange-900 font-semibold mb-3 text-center">y = −(x − 1)(x − 5)</p>
            <svg viewBox="0 0 200 200" className="w-full h-48">
              {/* Axes */}
              <line x1="20" y1="130" x2="190" y2="130" stroke="#333" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="40" y2="185" stroke="#333" strokeWidth="1.5" />
              {/* Arrow heads */}
              <polygon points="190,130 185,127 185,133" fill="#333" />
              <polygon points="40,20 37,25 43,25" fill="#333" />
              {/* Grid marks */}
              <line x1="60" y1="127" x2="60" y2="133" stroke="#666" strokeWidth="1" />
              <line x1="140" y1="127" x2="140" y2="133" stroke="#666" strokeWidth="1" />
              {/* Parabola opening down: y = -(x-1)(x-5), x-intercepts at 1 and 5, vertex at (3,4) */}
              <path
                d="M 40,190 L 60,130 L 100,82 L 140,130 L 160,190"
                fill="none"
                stroke="#ea580c"
                strokeWidth="2.5"
              />
              {/* X-intercepts */}
              <circle cx="60" cy="130" r="4" fill="#ef4444" />
              <circle cx="140" cy="130" r="4" fill="#ef4444" />
              {/* Labels */}
              <text x="60" y="145" fontSize="10" fill="#ef4444" fontWeight="bold">1</text>
              <text x="140" y="145" fontSize="10" fill="#ef4444" fontWeight="bold">5</text>
            </svg>
            <p className="text-xs text-orange-700 text-center mt-2">开口向下，x 轴交点 1 和 5</p>
            <p className="text-xs text-red-600 text-center mt-1">❌ 不是开口向上</p>
          </div>
        </div>

        <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-4">
          <p className="text-sm text-ink-2 text-center leading-relaxed">
            <strong className="text-ink">本周重点（N6.8 sketching quadratic graphs）：</strong><br />
            • <strong>y = (x − p)² + q：</strong>顶点 (p, q)，开口向上（例：y = (x − 2)² + 1 顶点 (2, 1)）<br />
            • <strong>y = −(x − p)² + q：</strong>顶点 (p, q)，开口向下（例：y = −(x − 2)² + 1 顶点 (2, 1)）<br />
            • <strong>y = (x − a)(x − b)：</strong>x 轴交点 a 和 b，开口向上（例：y = (x − 1)(x − 5) 交点 1 和 5）<br />
            • <strong>y = −(x − a)(x − b)：</strong>x 轴交点 a 和 b，开口向下（例：y = −(x − 1)(x − 5) 交点 1 和 5）<br />
            <span className="text-accent font-semibold">常见错误：(x − 3)² + 1 顶点写成 (−3, 1)；−(x − 2)² + 4 以为开口向上；把交点和顶点混淆</span>
          </p>
        </div>
      </div>
    );
  }

  if (weekNumber === 109) {
    return (
      <div className="bg-paper border border-line rounded-xl p-6 mb-6">
        <h3 className="font-semibold text-ink mb-4 text-center">📊 本周图解</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Graph 1: y = x² */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-5">
            <p className="text-sm text-blue-900 font-semibold mb-3 text-center">y = x² (n = 2)</p>
            <svg viewBox="0 0 200 200" className="w-full h-48">
              {/* Axes */}
              <line x1="20" y1="160" x2="190" y2="160" stroke="#333" strokeWidth="1.5" />
              <line x1="100" y1="20" x2="100" y2="185" stroke="#333" strokeWidth="1.5" />
              {/* Arrow heads */}
              <polygon points="190,160 185,157 185,163" fill="#333" />
              <polygon points="100,20 97,25 103,25" fill="#333" />
              {/* Parabola: y = x^2 through origin */}
              <path
                d="M 40,80 L 60,100 L 80,130 L 100,160 L 120,130 L 140,100 L 160,80"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.5"
              />
              {/* Origin */}
              <circle cx="100" cy="160" r="4" fill="#ef4444" />
              {/* Labels */}
              <text x="100" y="177" fontSize="11" textAnchor="middle" fill="#333">0</text>
              <text x="105" y="155" fontSize="10" fill="#ef4444" fontWeight="bold">(0, 0)</text>
            </svg>
            <p className="text-xs text-blue-700 text-center mt-2">U 形抛物线，开口向上，过原点</p>
          </div>

          {/* Graph 2: y = x³ */}
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5">
            <p className="text-sm text-green-900 font-semibold mb-3 text-center">y = x³ (n = 3)</p>
            <svg viewBox="0 0 200 200" className="w-full h-48">
              {/* Axes */}
              <line x1="20" y1="100" x2="190" y2="100" stroke="#333" strokeWidth="1.5" />
              <line x1="100" y1="20" x2="100" y2="185" stroke="#333" strokeWidth="1.5" />
              {/* Arrow heads */}
              <polygon points="190,100 185,97 185,103" fill="#333" />
              <polygon points="100,20 97,25 103,25" fill="#333" />
              {/* Cubic curve: y = x^3 through origin, down-left to up-right */}
              <path
                d="M 40,150 Q 70,110 100,100 Q 130,90 160,50"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2.5"
              />
              {/* Origin */}
              <circle cx="100" cy="100" r="4" fill="#ef4444" />
              {/* Labels */}
              <text x="100" y="117" fontSize="11" textAnchor="middle" fill="#333">0</text>
              <text x="105" y="95" fontSize="10" fill="#ef4444" fontWeight="bold">(0, 0)</text>
            </svg>
            <p className="text-xs text-green-700 text-center mt-2">过原点，左下到右上</p>
          </div>

          {/* Graph 3: y = 1/x */}
          <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-5">
            <p className="text-sm text-purple-900 font-semibold mb-3 text-center">y = 1/x (n = −1)</p>
            <svg viewBox="0 0 200 200" className="w-full h-48">
              {/* Axes */}
              <line x1="20" y1="100" x2="190" y2="100" stroke="#333" strokeWidth="1.5" />
              <line x1="100" y1="20" x2="100" y2="185" stroke="#333" strokeWidth="1.5" />
              {/* Arrow heads */}
              <polygon points="190,100 185,97 185,103" fill="#333" />
              <polygon points="100,20 97,25 103,25" fill="#333" />
              {/* Hyperbola: y = 1/x, two branches */}
              {/* Branch 1: Quadrant I (x > 0, y > 0) */}
              <path
                d="M 110,90 Q 120,60 150,45"
                fill="none"
                stroke="#9333ea"
                strokeWidth="2.5"
              />
              <path
                d="M 110,110 Q 120,140 150,155"
                fill="none"
                stroke="#9333ea"
                strokeWidth="2.5"
              />
              {/* Branch 2: Quadrant III (x < 0, y < 0) */}
              <path
                d="M 90,110 Q 80,140 50,155"
                fill="none"
                stroke="#9333ea"
                strokeWidth="2.5"
              />
              <path
                d="M 90,90 Q 80,60 50,45"
                fill="none"
                stroke="#9333ea"
                strokeWidth="2.5"
              />
              {/* Labels */}
              <text x="155" y="43" fontSize="10" fill="#9333ea" fontWeight="bold">I</text>
              <text x="45" y="160" fontSize="10" fill="#9333ea" fontWeight="bold">III</text>
            </svg>
            <p className="text-xs text-purple-700 text-center mt-2">两支（第一、三象限），不过轴</p>
            <p className="text-xs text-red-600 text-center mt-1">❌ 不是抛物线</p>
          </div>

          {/* Graph 4: y = 1/x² */}
          <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-5">
            <p className="text-sm text-orange-900 font-semibold mb-3 text-center">y = 1/x² (n = −2)</p>
            <svg viewBox="0 0 200 200" className="w-full h-48">
              {/* Axes */}
              <line x1="20" y1="160" x2="190" y2="160" stroke="#333" strokeWidth="1.5" />
              <line x1="100" y1="20" x2="100" y2="185" stroke="#333" strokeWidth="1.5" />
              {/* Arrow heads */}
              <polygon points="190,160 185,157 185,163" fill="#333" />
              <polygon points="100,20 97,25 103,25" fill="#333" />
              {/* Hyperbola: y = 1/x², two branches both above x-axis */}
              {/* Branch 1: x > 0 */}
              <path
                d="M 110,150 Q 120,100 135,60 Q 145,35 160,25"
                fill="none"
                stroke="#ea580c"
                strokeWidth="2.5"
              />
              {/* Branch 2: x < 0 */}
              <path
                d="M 90,150 Q 80,100 65,60 Q 55,35 40,25"
                fill="none"
                stroke="#ea580c"
                strokeWidth="2.5"
              />
              {/* Labels */}
              <text x="165" y="25" fontSize="10" fill="#ea580c" fontWeight="bold">上</text>
              <text x="30" y="25" fontSize="10" fill="#ea580c" fontWeight="bold">上</text>
            </svg>
            <p className="text-xs text-orange-700 text-center mt-2">两支都在 x 轴上方</p>
            <p className="text-xs text-red-600 text-center mt-1">❌ 不会在第三象限下方</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
