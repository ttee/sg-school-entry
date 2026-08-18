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

  return null;
}
