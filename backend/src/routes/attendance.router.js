import { verifyTokenAndRole } from '../middleware/authMiddleware.js';

// Create and manage attendance records (for Admin or Faculty Assistant)
attendanceRouter.post('/create', verifyTokenAndRole(['admin', 'faculty_assistant']), attendanceController.createAttendance);
attendanceRouter.get('/view', verifyTokenAndRole(['admin', 'faculty_assistant', 'lecturer', 'student']), attendanceController.viewAttendance);
attendanceRouter.put('/:attendanceId', verifyTokenAndRole(['admin', 'faculty_assistant']), attendanceController.updateAttendance);
attendanceRouter.delete('/:attendanceId', verifyTokenAndRole(['admin', 'faculty_assistant']), attendanceController.deleteAttendance);

// Calculate and view eligibility for exams
attendanceRouter.get('/eligibility/calculate', verifyTokenAndRole(['admin', 'faculty_assistant']), attendanceController.calculateEligibility);
attendanceRouter.get('/eligibility/status', verifyTokenAndRole(['student', 'lecturer', 'admin']), attendanceController.viewExamEligibilityStatus);

// Attendance correction requests
attendanceRouter.post('/student/correction', verifyTokenAndRole(['student']), attendanceController.requestAttendanceCorrection);
attendanceRouter.put('/correction/:requestId', verifyTokenAndRole(['admin', 'faculty_assistant']), attendanceController.handleCorrectionRequest);
