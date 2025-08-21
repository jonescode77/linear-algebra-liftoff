// Data for all sections
const sectionsData = [
    {
        title: "What are Vectors?",
        interactive: 'canvas1',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Definition</h3>
                <p class="mb-4 text-gray-400 leading-relaxed">A <strong>vector</strong> is a mathematical object that has both <strong>magnitude</strong> (or length) and <strong>direction</strong>. Geometrically, we visualize a vector as a directed line segment, or an arrow. Algebraically, we represent it as an ordered list of numbers, called components.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Magnitude Formula</h3>
                <p class="mb-2 text-gray-400">The magnitude of a 2D vector <code>v = [x, y]</code> is found using the Pythagorean theorem. It's often denoted with double bars: <code>||v||</code>.</p>
                <div class="formula mb-4">||v|| = √(x² + y²)</div>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">A robot arm's position in space is defined by a <strong>position vector</strong> from its base to its gripper. To move the gripper to a target, the robot's control system calculates the <strong>displacement vector</strong> it needs to travel along.</p>
            </div>
        `,
        challenge: {
            question: "If a vector represents moving 3 units right and 4 units up, what is its magnitude (length)?",
            answer: "Using the formula: ||v|| = √(3² + 4²) = √(9 + 16) = √25 = 5. The magnitude is 5 units."
        }
    },
    {
        title: "Vector Operations",
        interactive: 'canvas2',
         content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Vector Addition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">To add two vectors, we add their corresponding components. Geometrically, this is equivalent to placing the vectors "head-to-tail".</p>
                <div class="formula mb-4">If u = [u₁, u₂] and v = [v₁, v₂],<br>then u + v = [u₁ + v₁, u₂ + v₂]</div>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Scalar Multiplication</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">Multiplying a vector by a scalar (a single number) scales its magnitude. The direction stays the same if the scalar is positive and flips 180° if it's negative.</p>
                <div class="formula mb-4">If v = [v₁, v₂] and c is a scalar,<br>then c * v = [c * v₁, c * v₂]</div>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">A robot might need to apply a force in a certain direction. The direction is a unit vector, and the amount of force is a scalar. Multiplying them gives the final <strong>force vector</strong> that the robot's motors must produce.</p>
            </div>
        `,
        challenge: {
            question: "Given A = [2, 1] and B = [1, 3], what is 2A + B?",
            answer: "First, find 2A: 2 * [2, 1] = [4, 2].<br>Then add B: [4, 2] + [1, 3] = [5, 5]."
        }
    },
    {
        title: "What are Matrices?",
        interactive: 'canvas3',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Definition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">A <strong>matrix</strong> is a rectangular grid of numbers, symbols, or expressions, arranged in <strong>rows</strong> and <strong>columns</strong>. A matrix with <code>m</code> rows and <code>n</code> columns is called an <code>m x n</code> matrix.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Example</h3>
                <p class="mb-2 text-gray-400">This is a 2x3 matrix:</p>
                <div class="formula mb-4">A = <span class="text-white">[[5, -1, 7], [2, 0, 9]]</span><br><span class="text-gray-400 text-sm">Here, A<sub>1,1</sub>=5, A<sub>1,2</sub>=-1, A<sub>2,3</sub>=9</span></div>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">A robot's orientation (its rotation in 3D space) is often represented by a 3x3 <strong>rotation matrix</strong>. This matrix precisely defines how the robot's own coordinate system is tilted relative to the world's coordinate system.</p>
            </div>
        `,
        challenge: {
            question: "In a 4x4 matrix B, what is the position of the element B<sub>3,4</sub>?",
            answer: "It's in the 3rd row and the 4th column."
        }
    },
    {
        title: "Matrix Operations",
        interactive: 'canvas4',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Matrix Addition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">To add two matrices, they must have the <strong>exact same dimensions</strong>. The operation is performed element-wise.</p>
                <div class="formula mb-4">If C = A + B, then C<sub>ij</sub> = A<sub>ij</sub> + B<sub>ij</sub></div>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Scalar Multiplication</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">To multiply a matrix by a scalar, you multiply every single element of the matrix by that scalar.</p>
                <div class="formula mb-4">If D = c * A, then D<sub>ij</sub> = c * A<sub>ij</sub></div>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">A robot's camera feed might be represented as a large matrix of pixel values. To increase the brightness, you can multiply the entire matrix by a scalar greater than 1. To create a negative image, you could subtract the matrix from a matrix of all 255s.</p>
            </div>
        `,
        challenge: {
            question: "Can you add a 2x3 matrix and a 3x2 matrix?",
            answer: "No. For addition or subtraction, the dimensions must be identical. A 2x3 matrix can only be added to another 2x3 matrix."
        }
    },
    {
        title: "Matrix as Transformation",
        interactive: 'canvas5',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">The Core Idea</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">The most powerful use of matrices is to perform <strong>linear transformations</strong>. A matrix can rotate, scale, shear, or reflect a vector—or any combination of these. When a matrix <code>M</code> multiplies a vector <code>v</code>, the result <code>Mv</code> is the new, transformed vector.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Matrix-Vector Product</h3>
                <p class="mb-2 text-gray-400">The product is found by taking the dot product of each row of the matrix with the vector.</p>
                <div class="formula mb-4"><span class="text-white">[[a, b], [c, d]] * [x, y] = [ax + by, cx + dy]</span></div>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">This is the heart of <strong>forward kinematics</strong>. A robot arm is a chain of links. Each joint's rotation is a matrix. To find the final position of the robot's hand, you multiply its initial position vector by the matrix of the first joint, then that result by the matrix of the second joint, and so on up the chain.</p>
            </div>
        `,
        challenge: {
            question: "What 2x2 matrix would stretch a vector horizontally by a factor of 3 and flip it vertically?",
            answer: "The matrix is [[3, 0], [0, -1]]. The `3` in the top-left scales the x-component, and the `-1` in the bottom-right scales the y-component."
        }
    },
    {
        title: "Matrix Multiplication",
        interactive: 'canvas6',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">The Rule</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">Matrix multiplication combines two matrices to produce a third. It is NOT element-wise. To multiply matrix A (m x n) by matrix B (n x p), the number of columns in A must equal the number of rows in B. The resulting matrix C will have dimensions m x p.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Formula</h3>
                <p class="mb-2 text-gray-400">The element C<sub>ij</sub> is the dot product of the i-th row of A and the j-th column of B.</p>
                <div class="formula mb-4">C<sub>ij</sub> = Σ (A<sub>ik</sub> * B<sub>kj</sub>) for k=1 to n</div>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Important: Order Matters!</h3>
                <p class="mb-4 text-gray-400">In general, <strong>AB ≠ BA</strong>. Matrix multiplication is not commutative. It represents a composition of transformations, and the order in which you apply them changes the outcome.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">This is used to chain transformations. A robot might rotate (Matrix R) and then translate (Matrix T). The combined transformation is found by multiplying the matrices: T * R. The order is crucial: translating then rotating is different from rotating then translating.</p>
            </div>
        `,
        challenge: {
            question: "If A is a 3x2 matrix and B is a 2x4 matrix, what are the dimensions of AB?",
            answer: "The inner dimensions (2 and 2) match, so multiplication is possible. The outer dimensions give the result's size: 3x4."
        }
    },
    {
        title: "Linear Transformations",
        interactive: 'canvas5', // Re-uses the best visual for this
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Definition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">A transformation (or function) T is linear if it satisfies two properties for all vectors u, v and any scalar c:</p>
                <ol class="list-decimal list-inside mb-4 text-gray-400"><li><strong>Additivity:</strong> T(u + v) = T(u) + T(v)</li><li><strong>Homogeneity:</strong> T(c * v) = c * T(v)</li></ol>
                <p class="mb-4 text-gray-400">In essence, all matrix transformations are linear transformations. They preserve the grid lines of space: lines remain lines, parallel lines remain parallel, and the origin remains fixed.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Geometric Intuition</h3>
                <p class="mb-4 text-gray-400">A linear transformation is entirely described by how it transforms the basis vectors (i-hat and j-hat in 2D). The columns of a transformation matrix are simply the coordinates where the original basis vectors land.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">The entire physics simulation of a robot, including forces, velocities, and accelerations, operates under the rules of linear transformations. This allows engineers to model and predict the robot's behavior using the concise language of matrices.</p>
            </div>
        `,
        challenge: {
            question: "Is shifting the entire plane 3 units to the right a linear transformation?",
            answer: "No. It violates the condition that the origin must remain fixed. T(0) would be (3,0), not 0. This is an 'affine' transformation."
        }
    },
    {
        title: "Linear Independence",
        interactive: 'canvas8',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Definition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">A set of vectors is <strong>linearly independent</strong> if no vector in the set can be written as a linear combination of the others. In other words, none of the vectors are redundant; each one adds a new dimension to the span.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Formal Test</h3>
                <p class="mb-2 text-gray-400">The set of vectors {v₁, v₂, ..., vₙ} is linearly independent if the only solution to the equation:</p>
                <div class="formula mb-4">c₁v₁ + c₂v₂ + ... + cₙvₙ = 0</div>
                <p class="mb-4 text-gray-400">is the trivial solution, where all scalars c₁, c₂, ..., cₙ are zero.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">For a 6-axis robot arm to control its position and orientation in 3D space (requiring 6 degrees of freedom), the vectors representing the motion of each joint must be linearly independent. If they were dependent, it would mean some joints are redundant and the robot couldn't move in all 6 ways freely.</p>
            </div>
        `,
        challenge: {
            question: "Are the vectors [1, 0], [0, 1], and [2, 2] linearly independent in 2D space?",
            answer: "No. The third vector is a linear combination of the first two: [2, 2] = 2*[1, 0] + 2*[0, 1]. They are linearly dependent."
        }
    },
    {
        title: "Span",
        interactive: 'canvas8', // Re-uses a good visual
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Definition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">The <strong>span</strong> of a set of vectors is the set of all possible points you can reach by taking linear combinations of those vectors.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Geometric Interpretation</h3>
                <ul class="list-disc list-inside mb-4 text-gray-400">
                    <li>The span of a single non-zero vector is a line through the origin.</li>
                    <li>The span of two linearly independent vectors in 2D is the entire 2D plane.</li>
                    <li>The span of two linearly independent vectors in 3D is a plane within that 3D space.</li>
                    <li>If two vectors are linearly dependent (collinear), their span is just a line.</li>
                </ul>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">The set of all points a robot's gripper can reach is called its <strong>workspace</strong>. The workspace is essentially the span of the vectors that define the robot's arm segments and joint movements. If a target is outside this span, the robot cannot reach it.</p>
            </div>
        `,
        challenge: {
            question: "What is the span of the vectors [1, 0, 0] and [0, 1, 0] in 3D space?",
            answer: "The xy-plane. You can reach any point (x, y, 0) but you cannot move in the z-direction."
        }
    },
    {
        title: "Basis & Dimension",
        interactive: 'canvas10',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Basis Definition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">A <strong>basis</strong> for a vector space is a set of linearly independent vectors that span the entire space. It's a minimal set of building blocks for the space.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Dimension Definition</h3>
                <p class="mb-4 text-gray-400">The <strong>dimension</strong> of a vector space is the number of vectors in any of its bases. This number is always the same for a given space.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">A robot's internal "thinking" might happen in a convenient basis related to its own joints (the joint space). To interact with the world, it must convert coordinates from its joint space basis to the world's Cartesian basis ([x, y, z]). This is called a <strong>change of basis</strong>, a key operation in robotics.</p>
            </div>
        `,
        challenge: {
            question: "Can the vectors {[2, 3], [4, 6]} form a basis for 2D space?",
            answer: "No. They are linearly dependent ([4, 6] = 2 * [2, 3]), so they only span a line, not the entire 2D plane. A basis must be linearly independent."
        }
    },
    {
        title: "Dot Product",
        interactive: 'canvas11',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Definition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">The <strong>dot product</strong> (or scalar product) is an operation that takes two vectors and returns a single scalar number. It's fundamentally a measure of how much one vector points in the direction of another.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Formulas</h3>
                <p class="mb-2 text-gray-400">Algebraic:</p>
                <div class="formula mb-4">a · b = a₁b₁ + a₂b₂ + ... + aₙbₙ</div>
                <p class="mb-2 text-gray-400">Geometric (reveals the connection to angles):</p>
                <div class="formula mb-4">a · b = ||a|| ||b|| cos(θ)</div>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Key Property: Orthogonality</h3>
                <p class="mb-4 text-gray-400">If the dot product of two non-zero vectors is <strong>zero</strong>, then cos(θ) must be zero, meaning the angle θ is 90°. The vectors are <strong>orthogonal</strong> (perpendicular).</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">The dot product is used to calculate how much of a force vector is applied in the direction of a motion vector. This determines the work done by a robot's actuator. It's also used to determine if a robot's path is perpendicular to a surface for tasks like drilling or inspection.</p>
            </div>
        `,
        challenge: {
            question: "What is the dot product of v = [2, -3] and w = [3, 2]?",
            answer: "v · w = (2)(3) + (-3)(2) = 6 - 6 = 0. The vectors are orthogonal."
        }
    },
    {
        title: "Cross Product",
        interactive: 'canvas12',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Definition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">The <strong>cross product</strong> is an operation on two vectors in 3D space. The result is a new vector that is <strong>perpendicular</strong> to both of the original vectors.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Direction and Magnitude</h3>
                <p class="mb-2 text-gray-400">The direction of the resulting vector is given by the <strong>right-hand rule</strong>. The magnitude is equal to the area of the parallelogram formed by the two vectors.</p>
                <div class="formula mb-4">||a x b|| = ||a|| ||b|| sin(θ)</div>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">The cross product is essential for calculating <strong>torque</strong> (or moment). If a robot applies a force (a vector) at some distance from a joint (a radius vector), the resulting torque (a new vector) is found using the cross product. This torque is what causes the joint to rotate.</p>
            </div>
        `,
        challenge: {
            question: "What is the cross product of i = [1, 0, 0] and j = [0, 1, 0]?",
            answer: "i x j = k, which is the vector [0, 0, 1]. It is perpendicular to both i and j."
        }
    },
    {
        title: "Determinants",
        interactive: 'canvas5', // Re-uses the best visual for this
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Definition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">The <strong>determinant</strong> is a scalar value that can be computed from the elements of a square matrix. It tells us about the geometric properties of the transformation described by the matrix.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Geometric Meaning</h3>
                <p class="mb-2 text-gray-400">The absolute value of the determinant gives the <strong>scaling factor</strong> of the transformation. For a 2x2 matrix, it's the factor by which the area of a shape changes. For a 3x3, it's the factor for volume.</p>
                <ul class="list-disc list-inside mb-4 text-gray-400">
                    <li>If det(A) = 0, the transformation squishes space into a lower dimension (a line or a point). The matrix is "singular".</li>
                    <li>If det(A) < 0, the orientation of space is flipped (like looking in a mirror).</li>
                </ul>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">A robot's configuration can be described by a matrix called the Jacobian. The determinant of the Jacobian is crucial. If the determinant is zero, the robot is in a <strong>singularity</strong>—a position where it loses one or more degrees of freedom and can get stuck, like a human elbow being fully extended.</p>
            </div>
        `,
        challenge: {
            question: "A 2x2 matrix has a determinant of 2. If you apply this transformation to a square with an area of 5, what is the new area?",
            answer: "The new area is the original area multiplied by the determinant: 5 * 2 = 10."
        }
    },
    {
        title: "Inverse Matrices",
        interactive: 'canvas14',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Definition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">The <strong>inverse</strong> of a square matrix A, denoted A<sup>-1</sup>, is the matrix that "undoes" the transformation of A. When multiplied together, they result in the identity matrix I (a matrix that does nothing).</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Existence of an Inverse</h3>
                <p class="mb-4 text-gray-400">A matrix has an inverse if and only if its determinant is <strong>non-zero</strong>. If the determinant is zero, the transformation squishes space, and you can't "un-squish" it; information is lost.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">This is the core of <strong>inverse kinematics</strong>. If you know the desired position of the robot's hand in world coordinates (a vector), you can multiply it by the inverse of the robot's transformation matrix to find the exact joint angles needed to reach that position. This is arguably the most important calculation in robotics.</p>
            </div>
        `,
        challenge: {
            question: "If matrix R rotates by 45 degrees, what does R<sup>-1</sup> do?",
            answer: "It rotates by -45 degrees, undoing the original rotation."
        }
    },
    {
        title: "Systems of Linear Equations",
        interactive: 'canvas15',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">The Ax = b Form</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">A system of linear equations can be represented compactly in matrix form as <strong>Ax = b</strong>, where:</p>
                <ul class="list-disc list-inside mb-4 text-gray-400">
                    <li><strong>A</strong> is the matrix of coefficients.</li>
                    <li><strong>x</strong> is the vector of unknown variables.</li>
                    <li><strong>b</strong> is the vector of constants.</li>
                </ul>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Solving the System</h3>
                <p class="mb-4 text-gray-400">If the matrix A is invertible (det(A) ≠ 0), we can find the unique solution for x by multiplying both sides by the inverse of A.</p>
                <div class="formula mb-4">x = A<sup>-1</sup>b</div>
                <p class="mb-4 text-gray-400">Geometrically, this is finding the one point where the lines (in 2D) or planes (in 3D) intersect.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">This is used in robot control and dynamics. The forces applied by a robot's motors (the unknowns in vector x) are related to the desired acceleration of its limbs (vector b) through a matrix A that describes the robot's mass and inertia. Solving Ax=b tells the robot exactly how much force each motor needs to apply.</p>
            </div>
        `,
        challenge: {
            question: "If a system Ax=b has det(A) = 0, what does this imply about the solution?",
            answer: "It implies there is either no solution (parallel lines) or infinitely many solutions (the same line). A unique solution does not exist."
        }
    },
    {
        title: "Eigenvectors & Eigenvalues",
        interactive: 'canvas16',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Definition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">An <strong>eigenvector</strong> of a matrix is a special non-zero vector that, when transformed by the matrix, does not change its direction (its span). It only gets scaled by a factor.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">The Core Equation</h3>
                <div class="formula mb-4">Av = λv</div>
                <p class="mb-4 text-gray-400">Where A is the matrix, v is the eigenvector, and λ (lambda) is the scalar eigenvalue. Eigenvectors are the "axes of transformation" for a matrix.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">Eigenvectors are used in stress analysis of robot parts. When a force is applied, the eigenvectors of the stress tensor matrix show the principal directions in which the material is being stretched or compressed. The eigenvalues give the magnitude of that stress. This helps engineers prevent parts from breaking.</p>
            </div>
        `,
        challenge: {
            question: "If a matrix transformation is a simple horizontal shear, what is the direction of its eigenvector?",
            answer: "The horizontal direction (the x-axis). Vectors on the x-axis are only stretched, they do not change direction. Its eigenvalue would be 1."
        }
    },
    {
        title: "Eigendecomposition",
        interactive: 'canvas17',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Definition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed"><strong>Eigendecomposition</strong> is the process of breaking down a matrix into its constituent eigenvectors and eigenvalues. This reveals the fundamental properties of the transformation by changing to a more convenient coordinate system.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">The Formula</h3>
                <p class="mb-2 text-gray-400">A matrix A can be decomposed as:</p>
                <div class="formula mb-4">A = Q Λ Q<sup>-1</sup></div>
                <ul class="list-disc list-inside mb-4 text-gray-400">
                    <li><strong>Q</strong> is the matrix whose columns are the eigenvectors of A. This is a "change of basis" matrix.</li>
                    <li><strong>Λ</strong> (Lambda) is a diagonal matrix containing the eigenvalues. This represents a simple scaling.</li>
                </ul>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">What it Means</h3>
                <p class="mb-4 text-gray-400">SVD states that any linear transformation can be broken down into three simple steps: a rotation (V<sup>T</sup>), a scaling along the principal axes (Σ), and another rotation (U).</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">In robot control theory, the stability of a system is determined by the eigenvalues of its state matrix. If all eigenvalues have negative real parts, the system is stable and will return to equilibrium after a disturbance. Eigendecomposition is used to analyze and ensure this stability.</p>
            </div>
        `,
        challenge: {
            question: "What does eigendecomposition represent conceptually?",
            answer: "It represents a change of basis to the eigenvector basis (Q⁻¹), a simple scaling along those new axes (Λ), and then a change of basis back to the original (Q)."
        }
    },
    {
        title: "Orthogonality",
        interactive: 'canvas11', // Re-uses dot product visual
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Definition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">Two vectors are <strong>orthogonal</strong> if they are perpendicular to each other. The easiest way to test for this is to see if their dot product is zero.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Orthonormal Basis</h3>
                <p class="mb-2 text-gray-400">An <strong>orthonormal basis</strong> is a basis where all vectors are mutually orthogonal and each vector has a magnitude of 1 (they are unit vectors). The standard basis {[1,0], [0,1]} is the most common example.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Orthogonal Matrices</h3>
                <p class="mb-4 text-gray-400">A square matrix is orthogonal if its columns (and rows) form an orthonormal basis. These matrices represent pure rotations and reflections. A key property is that their inverse is simply their transpose: Q<sup>-1</sup> = Q<sup>T</sup>. This is computationally very cheap!</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">Rotation matrices used to describe a robot's orientation are always orthogonal matrices. This makes calculations much easier, as finding the inverse rotation (to go from world coordinates back to robot coordinates) is as simple as transposing the matrix, saving valuable computation time.</p>
            </div>
        `,
        challenge: {
            question: "Is the matrix for a 45-degree rotation orthogonal?",
            answer: "Yes. All pure rotation matrices are orthogonal because they preserve lengths and angles, and their basis vectors remain perpendicular and unit length."
        }
    },
    {
        title: "Gram-Schmidt Process",
        interactive: 'canvas19',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Purpose</h3>
                <p class="mb-2 text-gray-400 leading-relaxed">The <strong>Gram-Schmidt process</strong> is an algorithm used to take any basis and convert it into a "nicer" <strong>orthonormal basis</strong> for the same space.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">The Method</h3>
                <p class="mb-2 text-gray-400">It works iteratively. For each vector, it subtracts the projection of that vector onto the previously found orthogonal vectors. This leaves only the component that is perpendicular to all previous ones. Finally, it normalizes each new vector (divides by its magnitude) to make it a unit vector.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">In advanced robot motion planning, it's often useful to define a local coordinate system at the robot's hand (e.g., one axis points forward, one up, one sideways). If the initial axes chosen are not perfectly perpendicular, the Gram-Schmidt process is used to 'clean them up' and create a valid, orthonormal coordinate system for precise tool manipulation.</p>
            </div>
        `,
        challenge: {
            question: "What is the main outcome of applying the Gram-Schmidt process to a basis?",
            answer: "It produces a new basis for the same space, but with the convenient properties that all basis vectors are mutually perpendicular and have a length of 1."
        }
    },
    {
        title: "Singular Value Decomposition (SVD)",
        interactive: 'canvas20',
        content: `
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">Definition</h3>
                <p class="mb-2 text-gray-400 leading-relaxed"><strong>Singular Value Decomposition (SVD)</strong> is a powerful factorization of any matrix (not just square ones) into three separate, meaningful matrices.</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">The Formula</h3>
                <p class="mb-2 text-gray-400">A matrix A can be decomposed as:</p>
                <div class="formula mb-4">A = U Σ V<sup>T</sup></div>
                <ul class="list-disc list-inside mb-4 text-gray-400">
                    <li><strong>U</strong> and <strong>V</strong> are orthogonal matrices representing rotations.</li>
                    <li><strong>Σ</strong> (Sigma) is a diagonal matrix of 'singular values', which represent scaling factors.</li>
                </ul>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">What it Means</h3>
                <p class="mb-4 text-gray-400">SVD states that any linear transformation can be broken down into three simple steps: a rotation (V<sup>T</sup>), a scaling along the principal axes (Σ), and another rotation (U).</p>
            </div>
            <div class="content-card">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">🤖 Connection to Robotics</h3>
                <p class="mb-4 text-gray-400">SVD is used for data analysis and compression of robot sensor data, like 3D point clouds from a Lidar scanner. By keeping only the largest singular values, a compressed but still very accurate representation of the data can be stored. It's also used to find the best-fit plane or line to a set of data points, essential for robot perception.</p>
            </div>
        `,
        challenge: {
            question: "What is the main advantage of SVD over eigendecomposition?",
            answer: "SVD can be applied to any m x n matrix, whereas eigendecomposition only works for certain square matrices."
        }
    }
];

// Main application logic and interactive modules
document.addEventListener('DOMContentLoaded', () => {
    // --- STATE ---
    let currentSection = 1;
    const totalSections = sectionsData.length;
    let isPaused = false;
    let activeAnimationFrameId = null;

    // --- DOM ELEMENTS ---
    const sectionsContainer = document.getElementById('sections-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const currentSectionText = document.getElementById('current-section-text');
    const pauseResumeBtn = document.getElementById('pause-resume-btn');

    // --- UTILITY FUNCTIONS ---
    function drawGrid(ctx, center_x, center_y, width, height, scale, color) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        for (let x = center_x % scale; x < width; x += scale) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
        }
        for (let y = center_y % scale; y < height; y += scale) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
        }
    }

    function drawAxis(ctx, center_x, center_y, width, height, color) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(center_x, 0); ctx.lineTo(center_x, height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, center_y); ctx.lineTo(width, center_y); ctx.stroke();
    }
    
    function drawVector(ctx, center_x, center_y, vec, color, label) {
        const headX = center_x + vec.x;
        const headY = center_y + vec.y;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(center_x, center_y);
        ctx.lineTo(headX, headY);
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.stroke();
        const angle = Math.atan2(vec.y, vec.x);
        ctx.translate(headX, headY);
        ctx.rotate(angle);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, 0); ctx.lineTo(-12, 6); ctx.lineTo(-12, -6); ctx.closePath(); ctx.fill();
        ctx.restore();
        if (label) {
            ctx.fillStyle = color;
            ctx.font = '14px Inter';
            ctx.fillText(label, headX + 10, headY + 5);
        }
    }
    
    function drawPolygon(ctx, center_x, center_y, points, color) {
        if (!points || points.length < 2) return;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(center_x + points[0].x, center_y + points[0].y);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(center_x + points[i].x, center_y + points[i].y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    function setupCanvas(canvasId, drawFunction) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return null;
        const resize = () => {
            const container = canvas.parentElement;
            if (!container) return;
            const w = container.clientWidth;
            const h = w * 0.75;
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
            }
            if (drawFunction) drawFunction();
        };
        window.addEventListener('resize', resize, true);
        resize();
        return canvas;
    }
    
    function getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        return {
            x: (evt.clientX - rect.left) * scaleX,
            y: (evt.clientY - rect.top) * scaleY
        };
    }

    function isNear(vec1, vec2, tolerance) {
        return Math.hypot(vec1.x - vec2.x, vec1.y - vec2.y) < tolerance;
    }

    // --- CORE APP FUNCTIONS ---
    function createSections() {
        sectionsData.forEach((data, index) => {
            const sectionEl = document.createElement('div');
            sectionEl.id = `section-${index + 1}`;
            sectionEl.className = 'section h-full flex flex-col hidden';
            
            let interactiveHTML = `
                <div class="interactive-area">
                    <h3 class="text-xl font-semibold mb-2 text-indigo-400">Interactive: ${data.title}</h3>
                    <p class="text-sm text-gray-500 mb-2" id="desc-${index+1}">Engage with the concepts visually.</p>
                    <canvas id="${data.interactive}" class="interactive-canvas"></canvas>
                    <div id="controls-${index + 1}" class="mt-4 flex-grow"></div>
                    <div id="info-${index + 1}" class="mt-2 text-center font-mono text-sm text-gray-400"></div>
                </div>
            `;
            if ([4, 6].includes(index + 1)) {
                interactiveHTML = `<div id="controls-${index + 1}" class="interactive-area"></div>`;
            }

            sectionEl.innerHTML = `
                <h2 class="text-3xl font-bold text-white mb-4">${index + 1}. ${data.title}</h2>
                <div class="section-content-grid">
                    <div class="text-content-area">${data.content}
                        <div class="content-card">
                            <h3 class="text-xl font-semibold mb-2 text-indigo-400">Challenge</h3>
                            <p class="font-semibold mb-2 text-gray-200">${data.challenge.question}</p>
                            <button onclick="toggleAnswer('answer-${index + 1}')" class="text-indigo-400 hover:text-indigo-300 font-semibold text-sm">Show Answer</button>
                            <div id="answer-${index + 1}" class="challenge-answer text-gray-300"><p>${data.challenge.answer}</p></div>
                        </div>
                    </div>
                    ${interactiveHTML}
                </div>
            `;
            sectionsContainer.appendChild(sectionEl);
        });
    }

    function showSection(sectionNumber) {
        if (activeAnimationFrameId) {
            cancelAnimationFrame(activeAnimationFrameId);
            activeAnimationFrameId = null;
        }

        const allSections = document.querySelectorAll('.section');
        allSections.forEach((section, index) => {
            section.classList.toggle('hidden', index + 1 !== sectionNumber);
        });
        updateUI();

        const initFunctionName = `initCanvas${sectionNumber}`;
        if (typeof window[initFunctionName] === 'function') {
            window[initFunctionName]();
        } else {
            const interactiveEl = document.getElementById(sectionsData[sectionNumber - 1].interactive);
            if (interactiveEl && interactiveEl.tagName === 'CANVAS') {
                const ctx = interactiveEl.getContext('2d');
                setupCanvas(interactiveEl.id, () => {
                    ctx.clearRect(0, 0, interactiveEl.width, interactiveEl.height);
                    ctx.fillStyle = '#9ca3af';
                    ctx.textAlign = 'center';
                    ctx.font = '16px Inter';
                    ctx.fillText('Visualizer for this topic.', interactiveEl.width / 2, interactiveEl.height / 2);
                });
            }
        }
    }

    function updateUI() {
        const progress = ((currentSection - 1) / (totalSections - 1)) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
        currentSectionText.textContent = currentSection;
        prevBtn.disabled = currentSection === 1;
        nextBtn.disabled = currentSection === totalSections;
    }

    // --- EVENT LISTENERS ---
    nextBtn.addEventListener('click', () => {
        if (currentSection < totalSections) {
            currentSection++;
            showSection(currentSection);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentSection > 1) {
            currentSection--;
            showSection(currentSection);
        }
    });

    pauseResumeBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        pauseResumeBtn.textContent = isPaused ? 'Resume' : 'Pause';
        if (!isPaused) {
            const drawFunctionName = `drawCanvas${currentSection}`;
            if (typeof window[drawFunctionName] === 'function') {
                window[drawFunctionName]();
            }
        }
    });

    window.toggleAnswer = (id) => document.getElementById(id).classList.toggle('show');

    // --- INTERACTIVE MODULES ---
    
    // Module 1: What are Vectors?
    window.initCanvas1 = () => {
        const canvas = setupCanvas('canvas1', window.drawCanvas1);
        if (!canvas) return;
        const info = document.getElementById('info-1');
        const ctx = canvas.getContext('2d');
        let isDrawing = false, vec = { x: 80, y: -60 };
        window.drawCanvas1 = () => {
            if (isPaused || !canvas) return;
            const { width, height } = canvas;
            const center_x = width / 2, center_y = height / 2;
            ctx.clearRect(0, 0, width, height);
            drawGrid(ctx, center_x, center_y, width, height, 25, '#1f2937');
            drawAxis(ctx, center_x, center_y, width, height, '#4b5563');
            drawVector(ctx, center_x, center_y, vec, '#a78bfa', 'v');
            const mag = Math.hypot(vec.x / 25, -vec.y / 25);
            info.textContent = `Vector: [${(vec.x / 25).toFixed(2)}, ${(-vec.y / 25).toFixed(2)}], Magnitude: ${(mag).toFixed(2)}`;
            activeAnimationFrameId = requestAnimationFrame(window.drawCanvas1);
        };
        const updateVec = (e) => {
            const pos = getMousePos(canvas, e);
            const center_x = canvas.width / 2, center_y = canvas.height / 2;
            vec.x = pos.x - center_x;
            vec.y = pos.y - center_y;
        };
        ['mousedown', 'touchstart'].forEach(evt => canvas.addEventListener(evt, (e) => { isDrawing = true; updateVec(e); if (e.touches) e.preventDefault(); }, { passive: false }));
        ['mouseup', 'mouseleave', 'touchend'].forEach(evt => canvas.addEventListener(evt, () => isDrawing = false));
        ['mousemove', 'touchmove'].forEach(evt => canvas.addEventListener(evt, (e) => { if (isDrawing) { updateVec(e); if (e.touches) e.preventDefault(); } }, { passive: false }));
        window.drawCanvas1();
    };

    // Module 2: Vector Operations
    window.initCanvas2 = () => {
        const canvas = setupCanvas('canvas2', window.drawCanvas2);
        if (!canvas) return;
        const controls = document.getElementById('controls-2');
        controls.innerHTML = `<div class="space-y-4"><div class="grid grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-400">Vector A (x): <span id="val-ax-2" class="font-bold text-indigo-400"></span></label><input type="range" id="slider-ax-2" min="-100" max="100" value="50"></div><div><label class="block text-sm font-medium text-gray-400">Vector A (y): <span id="val-ay-2" class="font-bold text-indigo-400"></span></label><input type="range" id="slider-ay-2" min="-100" max="100" value="-50"></div></div><div><label class="block text-sm font-medium text-gray-400">Scalar: <span id="val-s-2" class="font-bold text-indigo-400"></span></label><input type="range" id="slider-s-2" min="-2" max="3" value="1.5" step="0.1"></div></div>`;
        const ctx = canvas.getContext('2d');
        const sliders = { ax: document.getElementById('slider-ax-2'), ay: document.getElementById('slider-ay-2'), s: document.getElementById('slider-s-2') };
        const vals = { ax: document.getElementById('val-ax-2'), ay: document.getElementById('val-ay-2'), s: document.getElementById('val-s-2') };
        const vecB = { x: 80, y: 20 };
        window.drawCanvas2 = () => {
            if (isPaused || !canvas) return;
            const { width, height } = canvas;
            const center_x = width / 2, center_y = height / 2;
            ctx.clearRect(0, 0, width, height);
            drawGrid(ctx, center_x, center_y, width, height, 25, '#1f2937');
            drawAxis(ctx, center_x, center_y, width, height, '#4b5563');
            const vecA = { x: +sliders.ax.value, y: +sliders.ay.value };
            const scalar = +sliders.s.value;
            vals.ax.textContent = (vecA.x / 25).toFixed(1);
            vals.ay.textContent = (-vecA.y / 25).toFixed(1);
            vals.s.textContent = scalar.toFixed(1);
            const scaledA = { x: vecA.x * scalar, y: vecA.y * scalar };
            const resultant = { x: scaledA.x + vecB.x, y: scaledA.y + vecB.y };
            drawVector(ctx, center_x, center_y, vecA, '#f87171', 'A');
            drawVector(ctx, center_x, center_y, vecB, '#60a5fa', 'B');
            drawVector(ctx, center_x, center_y, scaledA, '#fbbf24', `s*A`);
            drawVector(ctx, center_x, center_y, resultant, '#34d399', 'C = sA+B');
            activeAnimationFrameId = requestAnimationFrame(window.drawCanvas2);
        };
        [sliders.ax, sliders.ay, sliders.s].forEach(s => s.addEventListener('input', () => { if (!isPaused) window.drawCanvas2(); }));
        window.drawCanvas2();
    };

    // Module 3: What are Matrices?
    window.initCanvas3 = () => {
        const canvas = setupCanvas('canvas3', window.drawCanvas3);
        if (!canvas) return;
        document.getElementById('desc-3').textContent = 'Hover over the matrix elements to see their indices and values.';
        const info = document.getElementById('info-3');
        const ctx = canvas.getContext('2d');
        const rows = 3, cols = 4;
        const matrix = Array.from({ length: rows }, () => Array.from({ length: cols }, () => Math.floor(Math.random() * 20) - 10));
        window.drawCanvas3 = () => {
            if (isPaused || !canvas) return;
            const { width, height } = canvas;
            const cellWidth = width / cols, cellHeight = height / rows;
            ctx.clearRect(0, 0, width, height);
            ctx.strokeStyle = '#4b5563';
            ctx.font = `bold ${Math.min(cellWidth, cellHeight) / 3}px Inter`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    ctx.fillStyle = '#e5e7eb';
                    ctx.fillText(matrix[i][j], j * cellWidth + cellWidth / 2, i * cellHeight + cellHeight / 2);
                    ctx.strokeRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
                }
            }
            activeAnimationFrameId = requestAnimationFrame(window.drawCanvas3);
        };
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            const { width, height } = canvas;
            const cellWidth = width / cols, cellHeight = height / rows;
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const c = Math.floor(x / cellWidth);
            const r = Math.floor(y / cellHeight);
            if (r >= 0 && r < rows && c >= 0 && c < cols) {
                info.textContent = `Element A[${r + 1}, ${c + 1}] = ${matrix[r][c]}`;
            }
        });
        canvas.addEventListener('mouseleave', () => info.textContent = 'Hover over an element');
        window.drawCanvas3();
    };

    // Module 4: Matrix Operations
    window.initCanvas4 = () => {
        const controls = document.getElementById('controls-4');
        const htmlContent = `
            <div class="flex items-center justify-around space-x-2">
                <div class="text-center">
                    <p class="font-bold text-xl text-gray-300">A</p>
                    <div class="grid grid-cols-2 gap-1 p-2 bg-black/20 rounded-lg" id="matrix-a-4"></div>
                </div>
                <p class="text-4xl font-bold text-indigo-400">+</p>
                <div class="text-center">
                    <p class="font-bold text-xl text-gray-300">B</p>
                    <div class="grid grid-cols-2 gap-1 p-2 bg-black/20 rounded-lg" id="matrix-b-4"></div>
                </div>
                <p class="text-4xl font-bold text-indigo-400">=</p>
                <div class="text-center">
                    <p class="font-bold text-xl text-gray-300">C</p>
                    <div id="result-c-4" class="grid grid-cols-2 gap-1 p-2 bg-indigo-900/50 rounded-lg border border-indigo-500"></div>
                </div>
            </div>
        `;
        controls.innerHTML = htmlContent;
        const matrixAContainer = document.getElementById('matrix-a-4');
        const matrixBContainer = document.getElementById('matrix-b-4');
        const resultContainer = document.getElementById('result-c-4');
        const values = { a: [[1, 2], [3, 4]], b: [[5, 6], [7, 8]] };
        
        const aInputs = Array.from({ length: 4 }, () => document.createElement('input'));
        const bInputs = Array.from({ length: 4 }, () => document.createElement('input'));
        const cOutputs = Array.from({ length: 4 }, () => document.createElement('div'));

        function updateC() {
            cOutputs.forEach((output, i) => {
                const row = Math.floor(i / 2);
                const col = i % 2;
                const result = values.a[row][col] + values.b[row][col];
                output.textContent = result.toFixed(1);
            });
        }
        
        aInputs.forEach((input, i) => {
            input.type = 'number';
            input.className = 'matrix-input';
            input.value = values.a[Math.floor(i / 2)][i % 2];
            input.addEventListener('input', (e) => {
                values.a[Math.floor(i / 2)][i % 2] = parseFloat(e.target.value) || 0;
                updateC();
            });
            matrixAContainer.appendChild(input);
        });

        bInputs.forEach((input, i) => {
            input.type = 'number';
            input.className = 'matrix-input';
            input.value = values.b[Math.floor(i / 2)][i % 2];
            input.addEventListener('input', (e) => {
                values.b[Math.floor(i / 2)][i % 2] = parseFloat(e.target.value) || 0;
                updateC();
            });
            matrixBContainer.appendChild(input);
        });

        cOutputs.forEach(output => {
            output.className = 'matrix-input matrix-output flex items-center justify-center bg-transparent border-none';
            resultContainer.appendChild(output);
        });

        updateC();
    };

    // Module 5 & 7 & 13: Matrix as Transformation / Linear Transformations / Determinants
    window.initCanvas5 = window.initCanvas7 = window.initCanvas13 = () => {
        const canvas = setupCanvas('canvas5', window.drawCanvas5);
        if (!canvas) return;
        const controls = document.getElementById(`controls-${currentSection}`);
        const info = document.getElementById(`info-${currentSection}`);
        controls.innerHTML = `<div class="grid grid-cols-2 gap-4"><label class="block text-sm font-medium text-gray-400">a (x-scale): <span id="val-m11-5">1.0</span></label><input type="range" id="m11-5" min="-2" max="2" value="1" step="0.1"><label class="block text-sm font-medium text-gray-400">b (y-shear): <span id="val-m12-5">0.0</span></label><input type="range" id="m12-5" min="-2" max="2" value="0" step="0.1"><label class="block text-sm font-medium text-gray-400">c (x-shear): <span id="val-m21-5">0.0</span></label><input type="range" id="m21-5" min="-2" max="2" value="0" step="0.1"><label class="block text-sm font-medium text-gray-400">d (y-scale): <span id="val-m22-5">1.0</span></label><input type="range" id="m22-5" min="-2" max="2" value="1" step="0.1"></div>`;
        const ctx = canvas.getContext('2d');
        const sliders = { m11: document.getElementById('m11-5'), m12: document.getElementById('m12-5'), m21: document.getElementById('m21-5'), m22: document.getElementById('m22-5') };
        const vals = { m11: document.getElementById('val-m11-5'), m12: document.getElementById('val-m12-5'), m21: document.getElementById('val-m21-5'), m22: document.getElementById('val-m22-5') };
        const scale = 40;
        const vec = { x: 1.5, y: 1 };
        window.drawCanvas5 = () => {
            if (isPaused || !canvas) return;
            const { width, height } = canvas;
            const center_x = width / 2, center_y = height / 2;
            ctx.clearRect(0, 0, width, height);
            const m11 = +sliders.m11.value, m12 = +sliders.m12.value, m21 = +sliders.m21.value, m22 = +sliders.m22.value;
            Object.keys(vals).forEach(k => vals[k].textContent = sliders[k].value);
            ctx.save();
            ctx.translate(center_x, center_y);
            drawGrid(ctx, 0, 0, width, height, scale, '#1f2937');
            drawAxis(ctx, 0, 0, width, height, '#4b5563');
            ctx.restore();
            const iHat = { x: m11 * scale, y: m21 * scale };
            const jHat = { x: m12 * scale, y: m22 * scale };
            drawVector(ctx, center_x, center_y, iHat, '#f87171', 'i-hat');
            drawVector(ctx, center_x, center_y, jHat, '#34d399', 'j-hat');
            const newX = (vec.x * iHat.x) + (vec.y * jHat.x);
            const newY = (vec.x * iHat.y) + (vec.y * jHat.y);
            drawVector(ctx, center_x, center_y, {x: newX, y: newY}, '#60a5fa', 'v');
            const det = m11 * m22 - m12 * m21;
            info.textContent = `Determinant: ${det.toFixed(2)}`;
            activeAnimationFrameId = requestAnimationFrame(window.drawCanvas5);
        };
        [sliders.m11, sliders.m12, sliders.m21, sliders.m22].forEach(s => s.addEventListener('input', () => { if (!isPaused) window.drawCanvas5(); }));
        window.drawCanvas5();
    };

    // Module 6: Matrix Multiplication
    window.initCanvas6 = () => {
        const controls = document.getElementById('controls-6');
        const htmlContent = `
            <div class="flex items-center justify-around space-x-2">
                <div class="text-center">
                    <p class="font-bold text-xl text-gray-300">A (2x2)</p>
                    <div class="grid grid-cols-2 gap-1 p-2 bg-black/20 rounded-lg" id="matrix-a-6"></div>
                </div>
                <p class="text-4xl font-bold text-indigo-400">*</p>
                <div class="text-center">
                    <p class="font-bold text-xl text-gray-300">B (2x2)</p>
                    <div class="grid grid-cols-2 gap-1 p-2 bg-black/20 rounded-lg" id="matrix-b-6"></div>
                </div>
                <p class="text-4xl font-bold text-indigo-400">=</p>
                <div class="text-center">
                    <p class="font-bold text-xl text-gray-300">C (2x2)</p>
                    <div id="result-c-6" class="grid grid-cols-2 gap-1 p-2 bg-indigo-900/50 rounded-lg border border-indigo-500"></div>
                </div>
            </div>
        `;
        controls.innerHTML = htmlContent;
        const matrixAContainer = document.getElementById('matrix-a-6');
        const matrixBContainer = document.getElementById('matrix-b-6');
        const resultContainer = document.getElementById('result-c-6');
        const values = { a: [[2, 1], [3, 4]], b: [[1, 2], [0, 5]] };

        const aInputs = Array.from({ length: 4 }, () => document.createElement('input'));
        const bInputs = Array.from({ length: 4 }, () => document.createElement('input'));
        const cOutputs = Array.from({ length: 4 }, () => document.createElement('div'));

        function updateC() {
            const a = values.a;
            const b = values.b;
            const result = [
                [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
                [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]]
            ];
            cOutputs.forEach((output, i) => {
                const row = Math.floor(i / 2);
                const col = i % 2;
                output.textContent = result[row][col].toFixed(1);
            });
        }
        
        aInputs.forEach((input, i) => {
            input.type = 'number';
            input.className = 'matrix-input';
            input.value = values.a[Math.floor(i / 2)][i % 2];
            input.addEventListener('input', (e) => {
                values.a[Math.floor(i / 2)][i % 2] = parseFloat(e.target.value) || 0;
                updateC();
            });
            matrixAContainer.appendChild(input);
        });

        bInputs.forEach((input, i) => {
            input.type = 'number';
            input.className = 'matrix-input';
            input.value = values.b[Math.floor(i / 2)][i % 2];
            input.addEventListener('input', (e) => {
                values.b[Math.floor(i / 2)][i % 2] = parseFloat(e.target.value) || 0;
                updateC();
            });
            matrixBContainer.appendChild(input);
        });
        
        cOutputs.forEach(output => {
            output.className = 'matrix-input matrix-output flex items-center justify-center bg-transparent border-none';
            resultContainer.appendChild(output);
        });

        updateC();
    };

    // Module 8 & 9: Linear Independence & Span
    window.initCanvas8 = window.initCanvas9 = () => {
        const canvas = setupCanvas('canvas8', window.drawCanvas8);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const controls = document.getElementById(`controls-${currentSection}`);
        const info = document.getElementById(`info-${currentSection}`);
        controls.innerHTML = `
            <div class="space-y-2">
                <div class="grid grid-cols-2 gap-4">
                    <div><label class="text-sm">Vector A (x, y):</label><input type="text" class="matrix-input" id="vec-a-8" value="1,0"></div>
                    <div><label class="text-sm">Vector B (x, y):</label><input type="text" class="matrix-input" id="vec-b-8" value="0,1"></div>
                </div>
                <button id="check-btn" class="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-semibold transition-colors">Check Independence</button>
            </div>
        `;
        const vecAInput = document.getElementById('vec-a-8');
        const vecBInput = document.getElementById('vec-b-8');
        const checkBtn = document.getElementById('check-btn');

        let vecA = {x: 50, y: 0};
        let vecB = {x: 0, y: -50};
        
        function parseVectors() {
            const a = vecAInput.value.split(',').map(Number);
            const b = vecBInput.value.split(',').map(Number);
            vecA = {x: a[0]*50, y: -a[1]*50};
            vecB = {x: b[0]*50, y: -b[1]*50};
        }
        
        function checkIndependence() {
            const det = (vecA.x * vecB.y - vecA.y * vecB.x);
            if (Math.abs(det) < 0.001) {
                info.textContent = "The vectors are LINEARLY DEPENDENT. They point in the same direction.";
                info.style.color = '#ef4444';
            } else {
                info.textContent = "The vectors are LINEARLY INDEPENDENT. They can span a 2D plane.";
                info.style.color = '#34d399';
            }
            window.drawCanvas8();
        }

        checkBtn.addEventListener('click', () => {
            parseVectors();
            checkIndependence();
        });
        
        window.drawCanvas8 = () => {
            if (isPaused || !canvas) return;
            const { width, height } = canvas;
            const center_x = width/2, center_y = height/2;
            ctx.clearRect(0,0,width,height);
            drawGrid(ctx, center_x, center_y, width, height, 50, '#1f2937');
            drawAxis(ctx, center_x, center_y, width, height, '#4b5563');
            drawVector(ctx, center_x, center_y, vecA, '#a78bfa', 'A');
            drawVector(ctx, center_x, center_y, vecB, '#f87171', 'B');
            activeAnimationFrameId = requestAnimationFrame(window.drawCanvas8);
        };

        parseVectors();
        checkIndependence();
    };

    // Module 10: Basis & Dimension
    window.initCanvas10 = () => {
        const canvas = setupCanvas('canvas10', window.drawCanvas10);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const controls = document.getElementById('controls-10');
        const info = document.getElementById('info-10');
        controls.innerHTML = `
            <div class="space-y-2">
                <div class="grid grid-cols-2 gap-4">
                    <div><label class="text-sm">Basis Vector i (x, y):</label><input type="text" class="matrix-input" id="basis-i" value="1,0"></div>
                    <div><label class="text-sm">Basis Vector j (x, y):</label><input type="text" class="matrix-input" id="basis-j" value="0,1"></div>
                </div>
                <p class="mt-4 text-gray-400">Drag the red point on the canvas to see its coordinates in the new basis.</p>
            </div>
        `;
        const iInput = document.getElementById('basis-i');
        const jInput = document.getElementById('basis-j');
        let iBasis = {x: 50, y: 0};
        let jBasis = {x: 0, y: -50};
        let point = {x: 100, y: -50};
        let isDragging = false;
        
        function updateVectors() {
            const i = iInput.value.split(',').map(Number);
            const j = jInput.value.split(',').map(Number);
            iBasis = {x: i[0]*50, y: -i[1]*50};
            jBasis = {x: j[0]*50, y: -j[1]*50};
            window.drawCanvas10();
        }

        iInput.addEventListener('input', updateVectors);
        jInput.addEventListener('input', updateVectors);
        
        canvas.addEventListener('mousedown', (e) => {
            const pos = getMousePos(canvas, e);
            const center_x = canvas.width/2;
            const center_y = canvas.height/2;
            point.x = pos.x - center_x;
            point.y = pos.y - center_y;
            isDragging = true;
            window.drawCanvas10();
        });
        canvas.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const pos = getMousePos(canvas, e);
                const center_x = canvas.width/2;
                const center_y = canvas.height/2;
                point.x = pos.x - center_x;
                point.y = pos.y - center_y;
                window.drawCanvas10();
            }
        });
        canvas.addEventListener('mouseup', () => isDragging = false);

        window.drawCanvas10 = () => {
            if (isPaused || !canvas) return;
            const { width, height } = canvas;
            const center_x = width/2, center_y = height/2;
            ctx.clearRect(0,0,width,height);
            drawGrid(ctx, center_x, center_y, width, height, 50, '#1f2937');
            drawAxis(ctx, center_x, center_y, width, height, '#4b5563');

            const iVector = {x: iBasis.x, y: iBasis.y};
            const jVector = {x: jBasis.x, y: jBasis.y};
            for (let n = -10; n <= 10; n++) {
                ctx.beginPath();
                ctx.moveTo(center_x + iVector.x * n - jVector.x * 10, center_y + iVector.y * n - jVector.y * 10);
                ctx.lineTo(center_x + iVector.x * n + jVector.x * 10, center_y + iVector.y * n + jVector.y * 10);
                ctx.strokeStyle = 'rgba(79, 70, 229, 0.5)';
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(center_x + jVector.x * n - iVector.x * 10, center_y + jVector.y * n - iVector.y * 10);
                ctx.lineTo(center_x + jVector.x * n + iVector.x * 10, center_y + jVector.y * n + iVector.y * 10);
                ctx.strokeStyle = 'rgba(79, 70, 229, 0.5)';
                ctx.stroke();
            }

            drawVector(ctx, center_x, center_y, iBasis, '#a78bfa', 'i-basis');
            drawVector(ctx, center_x, center_y, jBasis, '#f87171', 'j-basis');

            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(center_x + point.x, center_y + point.y, 8, 0, 2 * Math.PI);
            ctx.fill();

            const det = (iBasis.x / 50) * (-jBasis.y / 50) - (-iBasis.y / 50) * (jBasis.x / 50);
            let x_new = 0, y_new = 0;
            if (Math.abs(det) > 0.001) {
                x_new = (point.x/50 * (-jBasis.y/50) - point.y/50 * (jBasis.x/50)) / det;
                y_new = (point.y/50 * (iBasis.x/50) - point.x/50 * (-iBasis.y/50)) / det;
            }
            info.textContent = `Standard Coords: [${(point.x/50).toFixed(1)}, ${(-point.y/50).toFixed(1)}], New Basis Coords: [${x_new.toFixed(1)}, ${y_new.toFixed(1)}]`;

            activeAnimationFrameId = requestAnimationFrame(window.drawCanvas10);
        };
        updateVectors();
    };

    // Module 11 & 18: Dot Product & Orthogonality
    window.initCanvas11 = window.initCanvas18 = () => {
        const canvas = setupCanvas('canvas11', window.drawCanvas11);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const controls = document.getElementById(`controls-${currentSection}`);
        const info = document.getElementById(`info-${currentSection}`);
        controls.innerHTML = `<p class="text-gray-400">Drag the endpoints of the two vectors on the canvas.</p>`;
        let vecA = {x: 100, y: -50};
        let vecB = {x: 50, y: -100};
        let activeVector = null;

        const getVectorFromMouse = (e) => {
            const pos = getMousePos(canvas, e);
            const center_x = canvas.width/2, center_y = canvas.height/2;
            return {
                x: pos.x - center_x,
                y: pos.y - center_y
            };
        };

        canvas.addEventListener('mousedown', (e) => {
            const mouseVec = getVectorFromMouse(e);
            if (isNear(mouseVec, vecA, 20)) activeVector = vecA;
            else if (isNear(mouseVec, vecB, 20)) activeVector = vecB;
            if (e.touches) e.preventDefault();
        });
        
        canvas.addEventListener('mousemove', (e) => {
            if (activeVector) {
                const newVec = getVectorFromMouse(e);
                activeVector.x = newVec.x;
                activeVector.y = newVec.y;
                window.drawCanvas11();
            }
            if(e.touches) e.preventDefault();
        });
        
        canvas.addEventListener('mouseup', () => activeVector = null);
        
        window.drawCanvas11 = () => {
            if (isPaused || !canvas) return;
            const { width, height } = canvas;
            const center_x = width/2, center_y = height/2;
            ctx.clearRect(0,0,width,height);
            drawGrid(ctx, center_x, center_y, width, height, 25, '#1f2937');
            drawAxis(ctx, center_x, center_y, width, height, '#4b5563');
            drawVector(ctx, center_x, center_y, vecA, '#a78bfa', 'A');
            drawVector(ctx, center_x, center_y, vecB, '#f87171', 'B');
            
            const dotProduct = vecA.x * vecB.x + vecA.y * vecB.y;
            info.textContent = `Dot Product: ${dotProduct.toFixed(2)}`;
            
            if (Math.abs(dotProduct) < 0.001) {
                info.style.color = '#34d399';
                info.textContent += " (Orthogonal!)";
            } else {
                info.style.color = '#e5e7eb';
            }

            activeAnimationFrameId = requestAnimationFrame(window.drawCanvas11);
        };
        window.drawCanvas11();
    };

    // Module 12: Cross Product
    window.initCanvas12 = () => {
        const canvas = setupCanvas('canvas12', window.drawCanvas12);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const controls = document.getElementById('controls-12');
        const info = document.getElementById('info-12');
        controls.innerHTML = `
            <div class="space-y-2">
                <div class="grid grid-cols-2 gap-4">
                    <div><label class="text-sm">Vector A (x, y, z):</label><input type="text" class="matrix-input" id="vec-a-12" value="1,0,0"></div>
                    <div><label class="text-sm">Vector B (x, y, z):</label><input type="text" class="matrix-input" id="vec-b-12" value="0,1,0"></div>
                </div>
            </div>
        `;
        const vecAInput = document.getElementById('vec-a-12');
        const vecBInput = document.getElementById('vec-b-12');
        
        function crossProduct(a, b) {
            return [
                a[1] * b[2] - a[2] * b[1],
                a[2] * b[0] - a[0] * b[2],
                a[0] * b[1] - a[1] * b[0]
            ];
        }

        function draw3DVector(ctx, center_x, center_y, vec, color, label) {
            const scale = 50;
            const x_projected = center_x + vec[0] * scale - vec[2] * scale * 0.3;
            const y_projected = center_y - vec[1] * scale + vec[2] * scale * 0.3;
            drawVector(ctx, center_x, center_y, { x: x_projected - center_x, y: y_projected - center_y }, color, label);
        }

        function updateVectors() {
            const a = vecAInput.value.split(',').map(Number);
            const b = vecBInput.value.split(',').map(Number);
            if (a.length === 3 && b.length === 3) {
                const result = crossProduct(a, b);
                info.textContent = `A x B = [${result[0].toFixed(1)}, ${result[1].toFixed(1)}, ${result[2].toFixed(1)}]`;
                window.drawCanvas12();
            }
        }
        
        vecAInput.addEventListener('input', updateVectors);
        vecBInput.addEventListener('input', updateVectors);

        window.drawCanvas12 = () => {
            if (isPaused || !canvas) return;
            const { width, height } = canvas;
            const center_x = width / 2, center_y = height / 2;
            ctx.clearRect(0, 0, width, height);
            const a = vecAInput.value.split(',').map(Number);
            const b = vecBInput.value.split(',').map(Number);
            const result = crossProduct(a, b);
            drawGrid(ctx, center_x, center_y, width, height, 50, '#1f2937');
            drawAxis(ctx, center_x, center_y, width, height, '#4b5563');
            draw3DVector(ctx, center_x, center_y, a, '#a78bfa', 'A');
            draw3DVector(ctx, center_x, center_y, b, '#f87171', 'B');
            draw3DVector(ctx, center_x, center_y, result, '#34d399', 'AxB');
            activeAnimationFrameId = requestAnimationFrame(window.drawCanvas12);
        };
        updateVectors();
    };
    
    // Module 14: Inverse Matrices
    window.initCanvas14 = () => {
        const canvas = setupCanvas('canvas14', window.drawCanvas14);
        if (!canvas) return;
        const controls = document.getElementById('controls-14');
        const info = document.getElementById('info-14');
        controls.innerHTML = `
            <div class="space-y-2">
                <p class="font-bold text-xl text-gray-300">Transformation Matrix A</p>
                <div class="grid grid-cols-2 gap-1 p-2 bg-black/20 rounded-lg" id="matrix-a-14"></div>
                <div class="mt-4 flex space-x-2">
                    <button id="apply-btn" class="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-semibold">Apply A</button>
                    <button id="inverse-btn" class="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold">Apply A⁻¹</button>
                </div>
            </div>
        `;
        const ctx = canvas.getContext('2d');
        const matrixAContainer = document.getElementById('matrix-a-14');
        const applyBtn = document.getElementById('apply-btn');
        const inverseBtn = document.getElementById('inverse-btn');
        
        const matrixValues = [[1, 0.5], [0, 1]];
        const shapePoints = [
            {x: -40, y: -40}, {x: 40, y: -40},
            {x: 40, y: 40}, {x: -40, y: 40}
        ];
        let currentPoints = JSON.parse(JSON.stringify(shapePoints));
        const originalPoints = JSON.parse(JSON.stringify(shapePoints));

        function getMatrix() {
            return [
                [parseFloat(document.getElementById('a11').value), parseFloat(document.getElementById('a12').value)],
                [parseFloat(document.getElementById('a21').value), parseFloat(document.getElementById('a22').value)]
            ];
        }

        function applyMatrix(mat, points) {
            return points.map(p => ({
                x: mat[0][0]*p.x + mat[0][1]*p.y,
                y: mat[1][0]*p.x + mat[1][1]*p.y
            }));
        }
        
        function inverseMatrix(mat) {
            const det = mat[0][0]*mat[1][1] - mat[0][1]*mat[1][0];
            if (Math.abs(det) < 0.001) {
                info.textContent = "Determinant is zero. No inverse exists!";
                info.style.color = '#ef4444';
                return null;
            }
            const invDet = 1 / det;
            return [
                [mat[1][1]*invDet, -mat[0][1]*invDet],
                [-mat[1][0]*invDet, mat[0][0]*invDet]
            ];
        }

        function draw() {
            const {width, height} = canvas;
            const center_x = width/2, center_y = height/2;
            ctx.clearRect(0,0,width,height);
            drawGrid(ctx, center_x, center_y, width, height, 25, '#1f2937');
            drawAxis(ctx, center_x, center_y, width, height, '#4b5563');
            drawPolygon(ctx, center_x, center_y, originalPoints, 'rgba(129, 140, 248, 0.3)');
            drawPolygon(ctx, center_x, center_y, currentPoints, 'rgba(167, 139, 250, 0.8)');
        }
        
        for(let i=0; i<4; i++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'matrix-input';
            input.id = `a${Math.floor(i/2) + 1}${i%2 + 1}`;
            input.value = matrixValues[Math.floor(i/2)][i%2];
            matrixAContainer.appendChild(input);
        }

        applyBtn.addEventListener('click', () => {
            const mat = getMatrix();
            currentPoints = applyMatrix(mat, originalPoints);
            info.textContent = "Transformation Applied!";
            info.style.color = '#34d399';
            draw();
        });

        inverseBtn.addEventListener('click', () => {
            const mat = getMatrix();
            const invMat = inverseMatrix(mat);
            if(invMat) {
                currentPoints = applyMatrix(invMat, currentPoints);
                info.textContent = "Inverse Applied! The shape has returned to its original position.";
                info.style.color = '#34d399';
            }
            draw();
        });

        draw();
    };

    // Module 15: Systems of Linear Equations
    window.initCanvas15 = () => {
        const canvas = setupCanvas('canvas15', window.drawCanvas15);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const controls = document.getElementById('controls-15');
        const info = document.getElementById('info-15');
        controls.innerHTML = `
            <div class="space-y-2">
                <h3 class="text-xl font-semibold mb-2 text-indigo-400">System of Equations</h3>
                <div class="flex items-center space-x-2">
                    <input type="number" class="matrix-input w-1/4" id="a11" value="1">x + 
                    <input type="number" class="matrix-input w-1/4" id="a12" value="2">y = 
                    <input type="number" class="matrix-input w-1/4" id="b1" value="5">
                </div>
                <div class="flex items-center space-x-2">
                    <input type="number" class="matrix-input w-1/4" id="a21" value="3">x + 
                    <input type="number" class="matrix-input w-1/4" id="a22" value="4">y = 
                    <input type="number" class="matrix-input w-1/4" id="b2" value="11">
                </div>
                <button id="solve-btn" class="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-semibold">Solve System</button>
            </div>
        `;
        const solveBtn = document.getElementById('solve-btn');
        const inputs = {
            a11: document.getElementById('a11'), a12: document.getElementById('a12'), b1: document.getElementById('b1'),
            a21: document.getElementById('a21'), a22: document.getElementById('a22'), b2: document.getElementById('b2')
        };
        let solution = null;

        function solveSystem() {
            const a11 = parseFloat(inputs.a11.value), a12 = parseFloat(inputs.a12.value), b1 = parseFloat(inputs.b1.value);
            const a21 = parseFloat(inputs.a21.value), a22 = parseFloat(inputs.a22.value), b2 = parseFloat(inputs.b2.value);

            const det = a11 * a22 - a12 * a21;
            if(Math.abs(det) < 0.001) {
                if (a11 * b2 - a21 * b1 === 0 && a12 * b2 - a22 * b1 === 0) {
                    info.textContent = "Infinite solutions (lines are the same).";
                    info.style.color = '#fbbf24';
                    solution = null;
                } else {
                    info.textContent = "No solution (lines are parallel).";
                    info.style.color = '#ef4444';
                    solution = null;
                }
            } else {
                const invDet = 1 / det;
                const x = (a22 * b1 - a12 * b2) * invDet;
                const y = (a11 * b2 - a21 * b1) * invDet;
                solution = {x: x, y: y};
                info.textContent = `Unique Solution: x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`;
                info.style.color = '#34d399';
            }
            window.drawCanvas15();
        }

        solveBtn.addEventListener('click', solveSystem);
        
        window.drawCanvas15 = () => {
            if (isPaused || !canvas) return;
            const { width, height } = canvas;
            const center_x = width/2, center_y = height/2;
            ctx.clearRect(0,0,width,height);
            drawGrid(ctx, center_x, center_y, width, height, 25, '#1f2937');
            drawAxis(ctx, center_x, center_y, width, height, '#4b5563');
            const scale = 25;

            function drawLine(a1, a2, b, color) {
                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                const y1 = (-a1 * (-width / 2) - b) / a2;
                const y2 = (-a1 * (width / 2) - b) / a2;
                ctx.moveTo(0, center_y - y1 * scale);
                ctx.lineTo(width, center_y - y2 * scale);
                ctx.stroke();
            }
            
            drawLine(parseFloat(inputs.a11.value), parseFloat(inputs.a12.value), parseFloat(inputs.b1.value), '#a78bfa');
            drawLine(parseFloat(inputs.a21.value), parseFloat(inputs.a22.value), parseFloat(inputs.b2.value), '#f87171');

            if (solution) {
                ctx.fillStyle = '#34d399';
                ctx.beginPath();
                ctx.arc(center_x + solution.x * scale, center_y - solution.y * scale, 8, 0, 2 * Math.PI);
                ctx.fill();
            }
            activeAnimationFrameId = requestAnimationFrame(window.drawCanvas15);
        };
        solveSystem();
    };
    
    // Module 16 & 17: Eigenvectors & Eigendecomposition
    window.initCanvas16 = window.initCanvas17 = () => {
        const canvas = setupCanvas('canvas16', window.drawCanvas16);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const controls = document.getElementById(`controls-${currentSection}`);
        const info = document.getElementById(`info-${currentSection}`);
        controls.innerHTML = `
            <div class="space-y-2">
                <p class="font-bold text-xl text-gray-300">Transformation Matrix A</p>
                <div class="grid grid-cols-2 gap-1 p-2 bg-black/20 rounded-lg" id="matrix-a-16"></div>
                <div class="mt-4 flex space-x-2">
                    <button id="eigen-btn" class="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-semibold">Find Eigenvectors</button>
                    <button id="apply-btn-16" class="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold">Apply Transformation</button>
                </div>
            </div>
        `;
        const matrixAContainer = document.getElementById('matrix-a-16');
        const eigenBtn = document.getElementById('eigen-btn');
        const applyBtn = document.getElementById('apply-btn-16');
        const scale = 50;
        
        const matrixValues = [[1, 0.5], [0, 1]];
        let eigenVectors = null;
        let randomVectors = [];
        const numRandomVectors = 10;
        let isTransformed = false;

        function getMatrix() {
            return [
                [parseFloat(document.getElementById('a11-16').value), parseFloat(document.getElementById('a12-16').value)],
                [parseFloat(document.getElementById('a21-16').value), parseFloat(document.getElementById('a22-16').value)]
            ];
        }

        function applyMatrix(mat, vec) {
            return {
                x: mat[0][0]*vec.x + mat[0][1]*vec.y,
                y: mat[1][0]*vec.x + mat[1][1]*vec.y
            };
        }
        
        function findEigenvectors(mat) {
            const [a, b, c, d] = [mat[0][0], mat[0][1], mat[1][0], mat[1][1]];
            const trace = a + d;
            const det = a * d - b * c;
            const discriminant = Math.sqrt(trace * trace - 4 * det);
            if (isNaN(discriminant) || Math.abs(discriminant) < 0.001) {
                info.textContent = "No distinct real eigenvectors found.";
                info.style.color = '#ef4444';
                return null;
            }
            
            const lambda1 = (trace + discriminant) / 2;
            const lambda2 = (trace - discriminant) / 2;

            let v1 = {x: 0, y: 0}, v2 = {x: 0, y: 0};
            if (Math.abs(b) > 0.001) {
                v1 = {x: b, y: lambda1 - a};
                v2 = {x: b, y: lambda2 - a};
            } else if (Math.abs(c) > 0.001) {
                v1 = {x: lambda1 - d, y: c};
                v2 = {x: lambda2 - d, y: c};
            } else {
                v1 = {x: 1, y: 0};
                v2 = {x: 0, y: 1};
            }

            info.textContent = `Eigenvalue 1: ${lambda1.toFixed(2)}, Eigenvalue 2: ${lambda2.toFixed(2)}`;
            info.style.color = '#e5e7eb';
            return [v1, v2];
        }

        function draw() {
            const {width, height} = canvas;
            const center_x = width/2, center_y = height/2;
            ctx.clearRect(0,0,width,height);
            drawGrid(ctx, center_x, center_y, width, height, 25, '#1f2937');
            drawAxis(ctx, center_x, center_y, width, height, '#4b5563');

            if (eigenVectors) {
                drawVector(ctx, center_x, center_y, {x: eigenVectors[0].x*scale, y: -eigenVectors[0].y*scale}, '#fbbf24', 'v₁');
                drawVector(ctx, center_x, center_y, {x: eigenVectors[1].x*scale, y: -eigenVectors[1].y*scale}, '#f87171', 'v₂');
            }
            randomVectors.forEach(vec => {
                const drawVec = isTransformed ? applyMatrix(getMatrix(), vec) : vec;
                drawVector(ctx, center_x, center_y, {x: drawVec.x*scale, y: -drawVec.y*scale}, 'rgba(129, 140, 248, 0.4)');
            });
        }
        
        for(let i=0; i<4; i++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'matrix-input';
            input.id = `a${Math.floor(i/2) + 1}${i%2 + 1}-16`;
            input.value = matrixValues[Math.floor(i/2)][i%2];
            matrixAContainer.appendChild(input);
        }

        eigenBtn.addEventListener('click', () => {
            isTransformed = false;
            const mat = getMatrix();
            eigenVectors = findEigenvectors(mat);
            randomVectors = Array.from({length: numRandomVectors}, () => ({
                x: Math.random() * 2 - 1,
                y: Math.random() * 2 - 1,
            }));
            draw();
        });

        applyBtn.addEventListener('click', () => {
            isTransformed = true;
            draw();
        });

        eigenBtn.click();
    };

    // Module 19: Gram-Schmidt Process
    window.initCanvas19 = () => {
        const canvas = setupCanvas('canvas19', window.drawCanvas19);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const controls = document.getElementById('controls-19');
        const info = document.getElementById('info-19');
        controls.innerHTML = `
            <div class="space-y-2">
                <div class="grid grid-cols-2 gap-4">
                    <div><label class="text-sm">Vector v₁ (x, y):</label><input type="text" class="matrix-input" id="v1-input" value="2,1"></div>
                    <div><label class="text-sm">Vector v₂ (x, y):</label><input type="text" class="matrix-input" id="v2-input" value="1,2"></div>
                </div>
                <button id="gram-schmidt-btn" class="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-semibold">Apply Gram-Schmidt</button>
            </div>
        `;
        const v1Input = document.getElementById('v1-input');
        const v2Input = document.getElementById('v2-input');
        const applyBtn = document.getElementById('gram-schmidt-btn');
        const scale = 50;

        let v1 = {x: 2*scale, y: -1*scale};
        let v2 = {x: 1*scale, y: -2*scale};
        let u1 = null, u2 = null;
        let isOrthogonalized = false;

        function updateVectors() {
            const v1_coords = v1Input.value.split(',').map(Number);
            const v2_coords = v2Input.value.split(',').map(Number);
            v1 = {x: v1_coords[0] * scale, y: -v1_coords[1] * scale};
            v2 = {x: v2_coords[0] * scale, y: -v2_coords[1] * scale};
            isOrthogonalized = false;
            window.drawCanvas19();
        }

        applyBtn.addEventListener('click', () => {
            // Step 1: u1 = v1
            u1 = {x: v1.x, y: v1.y};
            
            // Step 2: u2 = v2 - proj_u1(v2)
            const dot_v2_u1 = v2.x * u1.x + v2.y * u1.y;
            const dot_u1_u1 = u1.x * u1.x + u1.y * u1.y;
            if(Math.abs(dot_u1_u1) > 0.001) {
                const proj_scalar = dot_v2_u1 / dot_u1_u1;
                const proj_vec = {x: u1.x * proj_scalar, y: u1.y * proj_scalar};
                u2 = {x: v2.x - proj_vec.x, y: v2.y - proj_vec.y};
                info.textContent = `Orthonormal basis found! u₁ and u₂ are the new vectors.`;
                info.style.color = '#34d399';
                isOrthogonalized = true;
            } else {
                u2 = {x: v2.x, y: v2.y};
                info.textContent = "v₁ is a zero vector. Cannot proceed with Gram-Schmidt.";
                info.style.color = '#ef4444';
            }
            window.drawCanvas19();
        });

        v1Input.addEventListener('input', updateVectors);
        v2Input.addEventListener('input', updateVectors);
        
        window.drawCanvas19 = () => {
            if (isPaused || !canvas) return;
            const { width, height } = canvas;
            const center_x = width/2, center_y = height/2;
            ctx.clearRect(0,0,width,height);
            drawGrid(ctx, center_x, center_y, width, height, 50, '#1f2937');
            drawAxis(ctx, center_x, center_y, width, height, '#4b5563');

            drawVector(ctx, center_x, center_y, v1, '#a78bfa', 'v₁');
            drawVector(ctx, center_x, center_y, v2, '#f87171', 'v₂');

            if (isOrthogonalized) {
                drawVector(ctx, center_x, center_y, u1, '#fbbf24', 'u₁');
                drawVector(ctx, center_x, center_y, u2, '#34d399', 'u₂');
            }
            activeAnimationFrameId = requestAnimationFrame(window.drawCanvas19);
        };
        updateVectors();
    };

    // Module 20: Singular Value Decomposition (SVD)
    window.initCanvas20 = () => {
        const canvas = setupCanvas('canvas20', window.drawCanvas20);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const controls = document.getElementById('controls-20');
        const info = document.getElementById('info-20');
        controls.innerHTML = `
            <div class="space-y-2">
                <p class="font-bold text-xl text-gray-300">Matrix A (2x2)</p>
                <div class="grid grid-cols-2 gap-1 p-2 bg-black/20 rounded-lg" id="matrix-a-20"></div>
                <button id="svd-btn" class="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-semibold">Show SVD</button>
            </div>
        `;
        const matrixAContainer = document.getElementById('matrix-a-20');
        const svdBtn = document.getElementById('svd-btn');
        const scale = 50;

        let matrixValues = [[1, 1], [0.5, 2]];
        let svdResults = null;
        let shapePoints = [{x: -50, y: -50}, {x: 50, y: -50}, {x: 50, y: 50}, {x: -50, y: 50}];

        function getMatrix() {
            return [
                [parseFloat(document.getElementById('a11-20').value), parseFloat(document.getElementById('a12-20').value)],
                [parseFloat(document.getElementById('a21-20').value), parseFloat(document.getElementById('a22-20').value)]
            ];
        }

        function applyMatrix(mat, points) {
            return points.map(p => ({
                x: mat[0][0]*p.x + mat[0][1]*p.y,
                y: mat[1][0]*p.x + mat[1][1]*p.y
            }));
        }

        function drawShape(ctx, center_x, center_y, points, color) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(center_x + points[0].x, center_y + points[0].y);
            points.slice(1).forEach(p => ctx.lineTo(center_x + p.x, center_y + p.y));
            ctx.closePath();
            ctx.fill();
        }

        function SVD2x2(A) {
            const [a, b, c, d] = [A[0][0], A[0][1], A[1][0], A[1][1]];
            const AtA = [[a*a+c*c, a*b+c*d], [a*b+c*d, b*b+d*d]];
            const trace = AtA[0][0] + AtA[1][1];
            const det = AtA[0][0]*AtA[1][1] - AtA[0][1]*AtA[1][0];
            const sqrtDet = Math.sqrt(det);
            const sqrtDisc = Math.sqrt(trace*trace - 4*det);
            const lambda1 = (trace + sqrtDisc)/2;
            const lambda2 = (trace - sqrtDisc)/2;
            const s1 = Math.sqrt(lambda1), s2 = Math.sqrt(lambda2);

            let v1 = [AtA[0][1], lambda1 - AtA[0][0]];
            let v2 = [AtA[0][1], lambda2 - AtA[0][0]];
            const len1 = Math.hypot(v1[0], v1[1]);
            const len2 = Math.hypot(v2[0], v2[1]);
            v1 = [v1[0]/len1, v1[1]/len1];
            v2 = [v2[0]/len2, v2[1]/len2];

            const V = [[v1[0], v2[0]], [v1[1], v2[1]]];
            const Sigma = [[s1, 0], [0, s2]];
            
            const invSigma = [[1/s1, 0], [0, 1/s2]];
            const U_calc = [
                [A[0][0]*V[0][0]*invSigma[0][0] + A[0][1]*V[1][0]*invSigma[0][0], A[0][0]*V[0][1]*invSigma[1][1] + A[0][1]*V[1][1]*invSigma[1][1]],
                [A[1][0]*V[0][0]*invSigma[0][0] + A[1][1]*V[1][0]*invSigma[0][0], A[1][0]*V[0][1]*invSigma[1][1] + A[1][1]*V[1][1]*invSigma[1][1]]
            ];
            const U = U_calc;

            return {U, Sigma, V};
        }
        
        window.drawCanvas20 = () => {
            if (isPaused || !canvas) return;
            const { width, height } = canvas;
            const center_x = width/2, center_y = height/2;
            ctx.clearRect(0,0,width,height);
            drawGrid(ctx, center_x, center_y, width, height, 50, '#1f2937');
            drawAxis(ctx, center_x, center_y, width, height, '#4b5563');
            
            const A = getMatrix();
            const originalPoints = [{x:-50,y:-50},{x:50,y:-50},{x:50,y:50},{x:-50,y:50}];
            drawShape(ctx, center_x, center_y, originalPoints, 'rgba(129, 140, 248, 0.3)');
            const transformedPoints = applyMatrix(A, originalPoints);
            drawShape(ctx, center_x, center_y, transformedPoints, 'rgba(167, 139, 250, 0.8)');

            info.textContent = 'Original square (light) is transformed into the parallelogram (dark).';

            activeAnimationFrameId = requestAnimationFrame(window.drawCanvas20);
        };
        
        for(let i=0; i<4; i++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'matrix-input';
            input.id = `a${Math.floor(i/2) + 1}${i%2 + 1}-20`;
            input.value = matrixValues[Math.floor(i/2)][i%2];
            matrixAContainer.appendChild(input);
        }
        
        svdBtn.addEventListener('click', runSVD);
        runSVD();
    };

    // --- INITIALIZATION ---
    createSections();
    showSection(currentSection);
});