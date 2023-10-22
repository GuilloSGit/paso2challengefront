export type User = {
  name: string
  role: string
  avatar: string
}

export type Career = {
  career_id: string;
  careerName: string;
  type: string;
  modality: string;
  status: string;
};

export type Log = {
  LogType: string;
  date: string;
  dateTime: string;
  responsible: string;
  deliverenmentPurpuse: string | null;
  mailLink: string | null;
  callDuration: string | null;
  dialedNumber: string | null;
  assignmentName: string | null;
  communicationDetail: string | null;
  assignmentDeliverationStatus: string | null;
  quizScore: string | null;
  tags: string[] | null;
  tagDate: string | null;
};

export type Student = {
  [studentId: string]: {
    personalInfo: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      country: string;
      state: string;
    };
    scholarInfo: {
      career_student_id: string;
      category: string;
      status: string;
      period: string;
      cohort: string;
      currentStatus: string;
      school: string;
      admissionMode: string;
      segment: string;
      segmentDetail: string;
      incomeRiskDetail: {
        subjects: {
          [subject: string]: {
            risk: string;
            details: string;
          };
        };
      };
    };
    personalLogs: {
      recordAge: {
        creationDate: string;
        record: number;
      };
      lastContact: {
        lastContactDate: string;
        lastContactTime: string;
      };
      lastActivity: {
        lastContactDate: string;
        lastContactTime: string;
      };
    };
  };
};
